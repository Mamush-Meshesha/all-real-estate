import express from 'express';
import router from "./routes/userRoutes.js"
import dotenv from 'dotenv';
import connectDB from './config/db.js';
dotenv.config()
const app = express();
app.use(express.json());
const port = 3000

app.use(router)

connectDB()
app.listen(port, () => {
    console.log(`app listening on port ${port}`)
});