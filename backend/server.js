import express from 'express';
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import Stripe from "stripe"

dotenv.config();

import userRoute from "./routes/userRoutes.js"
import connectDB from './config/db.js';
import cors from "cors"
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}))
const port = 3000
app.use(
  cors({
    origin: "http://localhost:5173", // Your frontend origin
    credentials: true, // Allow cookies to be sent and received
  })
);

const stripe = Stripe(
  "pk_test_51PyUz8IZdOaa1wBOOqCms0ayeWK2dokq0WM0PsjzYvsWvzQdX5RmzkBPlgglslEAPQzjOHU7r7LbrEtJ7zizDsV000SggvViQn"
);
const client_secret =
  "sk_test_51PyUz8IZdOaa1wBOEoScJ1ZRY26Qs5RUOBujDof85Eg8jM2CYMZ3cDwC3qU15Aub9JfT47MnZ6Cgnm3ZeyVtzdme009mf0hWHH";
app.post("/create-payment-intent", async(req, res) => {
  const { amount } = req.body
  
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      automatic_payment_methods: {
        enabled : true
      }

    })
    res.status(201).json({ clientSecret: paymentIntent.client_secret })
    console.log(client_secret)
  } catch (error) {
    console.log(error)
        res.status(500).json({ error: "Failed to create payment intent" });

  }
})

app.use("/api", userRoute)

connectDB()
app.listen(port, () => {
    console.log(`app listening on port ${port}`)
});