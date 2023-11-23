import { Router } from "express";
import { createUser, getUsers } from "../controller/customer.controller";

const user_router = Router()

user_router.post('/', createUser)
user_router.get('/', getUsers)

export default user_router