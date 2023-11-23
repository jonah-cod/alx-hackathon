import { Request, Response } from "express";
import pool from "../config/sqlConfig";
import { v4 } from "uuid";


export const createProduct = async(req: Request, res: Response)=>{
    try {
        
        const {name, description, price, quantity, category, imageUrl} = req.body

        let product_id = v4()

        if(name && description && price && quantity && category && imageUrl){
            let result = await pool.query(
                `INSERT INTO Products (product_id, name, description, price, quantity, category, imageUrl) 
                VALUES ($1, $2, $3, $4, $5, $6, $7)`,
                [product_id, name, description, price, quantity, category, imageUrl]
            );

         return res.json({
            message: 'Product created successfully'
         })
        }else{
            return res.json({
                message: 'All fields are required'
             })
        }
        

    } catch (error) {
        return res.json({
            error: error
        })
    }
}

export const getProducts = async( req: Request, res: Response )=>{
    try {
        let result = await pool.query(
            `SELECT * FROM Products`
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
