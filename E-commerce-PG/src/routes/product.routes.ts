import { Router } from "express";
import { createProduct, getProducts } from "../controller/product.controller";

const productRouter = Router()

productRouter.post('/', createProduct)
productRouter.get('/', getProducts)

export default productRouter