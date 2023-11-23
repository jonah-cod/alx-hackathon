import { Router } from "express";
import { createOrder, getOrderItems, getOrders } from "../controller/order.controller";

const order_router = Router()

order_router.post('/', createOrder)
order_router.get('/', getOrders)
order_router.get('/:id', getOrderItems)

export default order_router