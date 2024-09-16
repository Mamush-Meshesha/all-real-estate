import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import {  useEffect } from "react";
import { stripeRequest } from "../slice/homeSlice";

const StripePay = () => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const { error, succeeded, paymentIntent, loading, amount } = useSelector(
    (state) => state.property
  );


  // Effect to fetch payment intent when amount is set
  useEffect(() => {
    if (amount && amount > 0) {
      dispatch(stripeRequest(amount)); // Trigger action to create payment intent
    }
  }, [amount, dispatch]);


  const handlePayment = async () => {
    if (!stripe || !elements || !paymentIntent) {
      return; // Don't proceed if Stripe.js or payment intent is not ready
    }

    const { error: stripeError, paymentIntent: stripePaymentIntent } =
      await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: "http://localhost:3000/stripe-confirm", // Replace with your return URL
        },
      });

    if (stripeError) {
      console.log("Payment error:", stripeError.message);
    } else if (stripePaymentIntent.status === "succeeded") {
      console.log("Payment succeeded!");
    }
  };

  return (
    <div>
     
        <CardElement />

      {/* Confirm payment button, only enabled when paymentIntent is ready */}
      {paymentIntent && !loading && (
        <button onClick={handlePayment} disabled={!stripe}>
          Confirm Payment
        </button>
      )}

      {error && <div>{error}</div>}
      {succeeded && <div>Payment succeeded!</div>}
    </div>
  );
};

export default StripePay;
