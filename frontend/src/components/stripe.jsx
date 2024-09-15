import {
  CardElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { stripeRequest, setAmount } from "../slice/homeSlice";

const StripePay = () => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const { error, succeeded, paymentIntent, loading, amount } = useSelector(
    (state) => state.property
  );

  const [inputAmount, setInputAmount] = useState("");

  useEffect(() => {
    if (amount) {
      dispatch(stripeRequest(amount)); // Fetch payment intent when amount is set
    }
  }, [amount, dispatch]);

  const handleAmountChange = (e) => {
    setInputAmount(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputAmount > 0) {
      dispatch(setAmount(Number(inputAmount))); // Trigger payment intent creation
    } else {
      console.log("Invalid amount");
    }
  };

  const handlePayment = async () => {
    if (!stripe || !elements || !paymentIntent) {
      return; // Don't proceed if Stripe.js or payment intent is not ready
    }

    const { error: stripeError, paymentIntent: stripePaymentIntent } =
      await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: "http://localhost:3000/your-return-url", // Replace with your return URL
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
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter amount"
          value={inputAmount}
          onChange={handleAmountChange}
        />
        <CardElement />
        <button type="submit" disabled={!stripe || loading || !inputAmount}>
          {loading ? "Processing..." : `Pay $${inputAmount}`}
        </button>
      </form>

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
