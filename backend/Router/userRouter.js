import { registerUser } from "../controller/userController.js";
import express from "express"
import { login } from "../controller/userController.js";

const userRouter=express.Router()

userRouter.post("/register",registerUser)
userRouter.post("/login",login)


export default userRouter;