import { Elements } from "@stripe/react-stripe-js";
import StripePay from "../components/stripe";
import { loadStripe } from "@stripe/stripe-js";
import {  useSelector } from "react-redux";


const stripePromise = loadStripe(
  "pk_live_51PyUz8IZdOaa1wBOsbezC0YN2BWFkLmA6zyrA27zsLAhgCesM42egohXpaoaQDcuNpEf1ILlYouuEee04LqiRFXG00OqsZJbwa"
);

const StripePayment = () => {
 const {paymentIntent } = useSelector(
   (state) => state.property
 );



    return (
      <div>
    
        <Elements stripe={stripePromise} options={paymentIntent}>
          <StripePay />
        </Elements>
      </div>
    );
}

export default StripePayment