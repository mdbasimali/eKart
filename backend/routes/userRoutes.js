import express from "express"
import isAuth from "../middleware/isAuth.js"
import { getAdmin, getCurrentUser } from "../controller/userController.js"
import adminAuth from "../middleware/adminAuth.js"

let userRoutes = express.Router()

userRoutes.get("/getCurrentuser", isAuth,getCurrentUser) // isAuth->middlewire 
userRoutes.get("/getadmin", adminAuth,getAdmin)//adminAuth->middlewire





export default userRoutes
