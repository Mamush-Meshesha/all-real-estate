import express from 'express'
import register from '../controllers/userControllers'
const router = express.Router()

router.get("/", async(req, res )=> {
    res.json("hello there")
})

router.post("/", register)


export default router