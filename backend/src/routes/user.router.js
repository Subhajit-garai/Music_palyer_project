import { Router } from "express";
import { createUser, userLogin } from "../controller/user.controller.js";
import { Uservalidator } from "../utils/auth.js";

export  const userRouter = Router();

userRouter.post('/auth',Uservalidator)
userRouter.post('/signup',createUser)
userRouter.post('/login',userLogin)
// userRouter.post()