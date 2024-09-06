import express from 'express';
import userRoute from "./routes/userRoutes.js"
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from "cors"
dotenv.config()
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
const port = 3000
app.use(cors())
app.use("/api", userRoute)

connectDB()
app.listen(port, () => {
    console.log(`app listening on port ${port}`)
});