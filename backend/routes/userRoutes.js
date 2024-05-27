import express from 'express'
import { loginUser, registerUser, verifyUser,checkVerification,varificationmail } from '../controllers/userController.js'

const router=express.Router()
router.post("/register",registerUser)
router.post("/login",loginUser)
router.get("/verify",verifyUser)
router.post("/sendverificationmail",varificationmail)
router.get("/check",checkVerification)

export default router