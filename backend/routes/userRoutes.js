import express from "express"
import isAuth from "../middleware/isAuth.js"
import { getCurrentUser } from "../controller/userController.js"

let userRoutes = express.Router()

userRoutes.get("/getCurrentuser", isAuth,getCurrentUser)
console.log("👉 /api/user/getCurrentuser route LOADED");




export default userRoutes
