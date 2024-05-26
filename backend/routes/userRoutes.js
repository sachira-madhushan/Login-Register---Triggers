import express from 'express'
import { loginUser, registerUser, verifyUser } from '../controllers/userController.js'

const router=express.Router()
router.post("/register",registerUser)
router.post("/login",loginUser)
router.get("/verify",verifyUser)

export default router