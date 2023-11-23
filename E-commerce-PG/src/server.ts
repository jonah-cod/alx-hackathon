import express, { NextFunction, Request, Response, json } from 'express'
import cors from 'cors'
import productRouter from './routes/product.routes'
import order_router from './routes/order.routes'
import user_router from './routes/customer.routes'

const app = express()

app.use(cors())
app.use(json())

app.use('/product', productRouter)
app.use('/order', order_router)
app.use('/user', user_router)

app.use((error: Error, req:Request, res:Response, next:NextFunction)=>{
    res.json({
        message: error.message
    }) 
})

app.listen(5500, ()=>{ 
    console.log("Server running on port 5500");
})

