import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import ChapaPay from "../components/chapa";
import { useEffect, useState } from "react";
import { setAmount, stripeRequest } from "../slice/homeSlice";


const Detail = () => {
   const { _id } = useParams(); // This should be '_id' based on your route structure

   // Correcting the selector logic
   const property = useSelector((state) =>
     state.property.house.find((prop) => prop._id === _id)
   );
  
   const dispatch = useDispatch();
   const { amount, loading } = useSelector(
     (state) => state.property
   );

   const [inputAmount, setInputAmount] = useState("");

   // Effect to fetch payment intent when amount is set
   useEffect(() => {
     
       dispatch(stripeRequest()); // Trigger action to create payment intent
     
   }, [dispatch]);

   const handleAmountChange = (e) => {
     setInputAmount(e.target.value);
   };

   const handleSubmit = (event) => {
     event.preventDefault();
     if (inputAmount > 0) {
       dispatch(setAmount(Number(inputAmount))); // Set amount and fetch payment intent
     } else {
       console.log("Invalid amount");
     }
   };

   if (!property) {
     return <h1>Property not found</h1>;
   }
    return (
      <div className="flex min-h-screen flex-col justify-between">
        <div className="container mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <img
              src={property.image}
              alt="Estate Image"
              className="rounded-lg shadow-lg w-full"
            />
            <div className="px-4 md:px-6 flex flex-col justify-center space-y-4">
              <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
                Location:{" "}
                <span className="text-blue-600">{property.location}</span>
              </h1>
              <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
                Category: <span className="text-blue-600"></span>
              </h1>
              <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
                Price: <span className="text-green-600">${property.price}</span>
              </h1>
              <h1 className="text-lg md:text-xl text-gray-600">
                {property.description}
              </h1>
              <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
                Owner: <span className="text-blue-600"></span>
              </h1>
            </div>
          </div>
          <div>
            <div>
             <form onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="Enter amount"
            value={inputAmount}
            onChange={handleAmountChange}
          />
                  <Link to="/stripe">
          <button type="submit" disabled={loading || !inputAmount}>
            {loading ? "Processing..." : `Pay with Stripe $${inputAmount}`}
          </button>
                  </Link>
        </form>
            </div>

            <ChapaPay />
          </div>
        </div>
        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto text-center">
            <p className="text-sm mb-2">
              © 2024 All In One. All rights reserved.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="/about" className="hover:underline">
                About Us
              </a>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
              <a href="/privacy" className="hover:underline">
                Privacy Policy
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
}

export default Detail