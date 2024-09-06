import express from 'express'
import {register,login} from '../controllers/userControllers.js'
const router = express.Router()

router.get("/", async(req, res )=> {
    res.json("hello there")
})

router.post("/user", register)
router.post("/auth", login)


export default router