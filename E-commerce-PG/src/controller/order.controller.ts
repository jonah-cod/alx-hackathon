import { Request, Response } from "express";
import { product } from "../interfaces/product";
import pool from "../config/sqlConfig";
import { v4 } from "uuid";


export const createOrder = async(req: Request, res: Response)=>{
    try {
        let order_id = v4()

        let {customer_id, shipping_to, product_id, quantity, unit_price} = req.body

        // the order items query
        let orderItems = [
            {product_id: product_id, quantity:quantity, unit_price:unit_price}
        ]
        await pool.query('BEGIN')

        for(let orderItem of orderItems){
            let order_item_id = v4()  
 
            // Store each order item details
            await pool.query(
                `INSERT INTO Order_items(order_item_id, order_id, product_id, quantity, unit_price, sub_total) VALUES($1, $2, $3, $4, $5, $6)`,
                [order_item_id, order_id, orderItem.product_id, orderItem.quantity, orderItem.unit_price, (unit_price*quantity)]
            )

            // update product count
            await pool.query(
                'UPDATE Products SET quantity = quantity - $1 WHERE product_id = $2',
                [orderItem.quantity, orderItem.product_id]
            );
            

            // Updating the new order in orders table
            await pool.query(
                `INSERT INTO Orders (order_id, customer_id, total_amount, shipping_to) 
                VALUES ($1, $2, $3, $4) RETURNING order_id`,
                [order_id, customer_id, (orderItem.unit_price*orderItem.quantity), shipping_to]
            );
                        
        }

        await pool.query('COMMIT');
         return res.json({
            message: 'Order created successfully'
         })
    } catch (error) {
        await pool.query('ROLLBACK');
        return res.json({
            error: error
        })
    }
}
export const getOrderItems = async(req: Request, res: Response)=>{
    try {
        let {order_id} = req.params


        let result = await pool.query(
            `SELECT * FROM Order_items`
        );

        return res.json({
        order_details: result.rows
        })
    } catch (error) {
        return res.json({
            error: error
        })
    }
}

export const getOrders = async( req: Request, res: Response )=>{
    try {
        let result = await pool.query(
            `SELECT * FROM Orders`
        );

        return res.json({
            message: result.rows
        })
    } catch (error) {
        return res.json({
            error: error
        })
    }
}
