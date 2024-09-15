import { useState } from "react";
import {useDispatch} from "react-redux"
import { chapaPayRequest } from "../slice/homeSlice";
const ChapaPay = () => {
    const [form, setForm] = useState({
        amount: "",
        currency: "",
        email: "",
        first_name: "",
        last_name: "",
        phone_number: "",
    })

    const dispatch = useDispatch()

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const tx_ref = `${form.first_name} - ${Date.now()}`
    let return_url = null

    const handleSubmit = (e) => {
                e.preventDefault();

        const data = {
                amount:form.amount,
                currency: "ETB",
                email: form.email,
                first_name: form.first_name,
                last_name: form.last_name,
                phone_number: form.phone_number,
                tx_ref: tx_ref,
                return_url: return_url,
        }
        
        dispatch(chapaPayRequest(data))
        

    }
    return (
      <div>
        <div>
          <h1 className="mx-[130px] mt-3 font-mono font-extrabold text-lg">
            Welcome
          </h1>
          <form
            className=" p-5 m-10 shadow-2xl rounded-xl grid grid-cols-2 gap-2  "
            onSubmit={handleSubmit}
          >
            <input
              className="m-3 border border-black px-5 py-2 rounded-lg"
              onChange={handleChange}
              type="text"
              name="amount"
              value={form.amount}
              placeholder="amount"
            />{" "}

            <input
              className="m-3 border border-black px-5 py-2 rounded-lg"
              onChange={handleChange}
              type="text"
              name="currency"
              value={form.currency}
              placeholder="currency"
            />

            <input
              className="m-3 border border-black px-5 py-2 rounded-lg"
              onChange={handleChange}
              type="text"
              name="email"
              value={form.email}
              placeholder="email"
            />

            <input
              className="m-3 border border-black px-5 py-2 rounded-lg"
              onChange={handleChange}
              type="text"
              name="first_name"
              value={form.first_name}
              placeholder="first_name"
            />

            <input
              className="m-3 border border-black px-5 py-2 rounded-lg"
              onChange={handleChange}
              type="text"
              name="last_name"
              placeholder="last_name"
              value={form.last_name}
            />

            <input
              className="m-3 border border-black px-5 py-2 rounded-lg"
              onChange={handleChange}
              type="text"
              name="phone_number"
              placeholder="phone_number"
              value={form.phone_number}
            />

            <button
              className="px-[100px] py-3 ml-3 rounded-md bg-green-600"
              type="submit"
            >
              Pay
            </button>
          </form>
        </div>
      </div>
    );
}
export default ChapaPay