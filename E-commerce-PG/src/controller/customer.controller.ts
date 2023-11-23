import { Request, Response } from "express";
import pool from "../config/sqlConfig";
import { v4 } from "uuid";
import bcrypt from 'bcrypt'


export const createUser = async(req: Request, res: Response)=>{
    try {
        
        const {name, email, phone_number, address, password} = req.body

        let customer_id = v4()

        let hashedPwd = await bcrypt.hash(password, 4)

        if(name && email && password && phone_number && address){
            let result = await pool.query(
                `INSERT INTO Customers (customer_id, name, email, phone_number, address, password) 
                VALUES ($1, $2, $3, $4, $5, $6)`,
                [customer_id, name, email, phone_number, address, hashedPwd]
            );

         return res.json({
            message: 'Account created successfully', result
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


export const getUsers = async( req: Request, res: Response )=>{
    try {
        let result = await pool.query(
            `SELECT * FROM Customers`
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
