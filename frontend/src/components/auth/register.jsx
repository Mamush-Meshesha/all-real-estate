import { useState } from "react";
import { LuToggleLeft } from "react-icons/lu";
import { LuToggleRight } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import {
  registerRequest,
  setAddress,
  setConfirm_password,
  setEmail,
  setFull_name,
  setPassword,
  setPhone_number,
} from "../../slice/userSlice";
import { Link } from "react-router-dom";

const RegisterCom = () => {
  const [choose, setChoose] = useState("customer");
  const dispatch = useDispatch();
  const {
    email,
    password,
    full_name,
    address,
    phone_number,
    comfirm_password,
  } = useSelector((state) => state.user);

  const register = (e) => {
    e.preventDefault(
      dispatch(
        registerRequest({
          email,
          password,
          full_name,
          address,
          phone_number,
          comfirm_password,
        })
      )
    );
  };
  return (
    <div className="bg-[#f4f5fa]">
      <div className="md:grid grid-cols-[minmax(50%,1fr)_minmax(50%,1fr)]  h-screen">
        <div className="md:flex hidden items-center justify-center h-full bg-green-500">
          <div>
            <div>
              <img src="/assets/images/real-estate.png" alt="no image found" />
            </div>
            <div className="flex justify-center">
              <img src="/assets/images/sales.gif" alt="not found" />
            </div>
          </div>
        </div>
        <div className="md:flex md:justify-center w-full items-center h-full md:px-10 p-3  ">
          <div className="bg-white w-full  border py-5 md:px-20 px-5 rounded-lg">
            <div>
              <div className="flex gap-4">
                <h1 className="text-2xl">Real-Estate Owner</h1>
                <div>
                  {choose === "customer" ? (
                    <LuToggleRight
                      className="text-[#46b14f] "
                      size={36}
                      onClick={() => setChoose("seller")}
                    />
                  ) : (
                    <LuToggleLeft
                      className="text-[#4e73c4]"
                      size={36}
                      onClick={() => setChoose("customer")}
                    />
                  )}
                </div>
                <h1 className="text-2xl">Buyer</h1>
              </div>
              <div className="flex justify-center py-5">
                <h1>Register</h1>
              </div>

              <form onSubmit={register}>
                <div className="">
                  <div className="pb-3">
                    <input
                      value={full_name}
                      onChange={(e) => dispatch(setFull_name(e.target.value))}
                      type="text"
                      placeholder="Full Name"
                      className="h-11 px-3 border rounded-md w-full"
                    />
                  </div>
                  <div className="pb-3">
                    <input
                      value={email}
                      onChange={(e) => dispatch(setEmail(e.target.value))}
                      type="email"
                      placeholder="Email Addess"
                      className="h-11 px-3 border rounded-md w-full"
                    />
                  </div>
                  <div className="pb-3">
                    <input
                      value={phone_number}
                      onChange={(e) =>
                        dispatch(setPhone_number(e.target.value))
                      }
                      type="tel"
                      placeholder="Phone number"
                      className="h-11 px-3 border rounded-md w-full"
                    />
                  </div>

                  <div className="pb-3">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => dispatch(setPassword(e.target.value))}
                      placeholder="Password"
                      className="h-11 px-3 border rounded-md w-full"
                    />
                  </div>
                  <div className="pb-3">
                    <input
                      value={password}
                      onChange={(e) =>
                        dispatch(setConfirm_password(e.target.value))
                      }
                      type="password"
                      placeholder="Confirm password"
                      className="h-11 px-3 border rounded-md w-full"
                    />
                  </div>
                  {choose === "customer" ? (
                    <div className="pb-3">
                      <input
                        value={address}
                        onChange={(e) => dispatch(setAddress(e.target.value))}
                        type="text"
                        placeholder="Preferred location"
                        className="h-11 px-3 border rounded-md w-full"
                      />
                    </div>
                  ) : (
                    <div>
                      <div className="pb-3">
                        <input
                          value={address}
                          onChange={(e) => dispatch(setAddress(e.target.value))}
                          type="text"
                          placeholder="Real-Estate Address"
                          className="h-11 px-3 border rounded-md w-full"
                        />
                      </div>
                      <div className="pb-3">
                        <input
                          value={address}
                          onChange={(e) => dispatch(setAddress(e.target.value))}
                          type="text"
                          placeholder="Real-Estate Name"
                          className="h-11 px-3 border rounded-md w-full"
                        />
                      </div>
                    </div>
                  )}

                  <div className="flex justify-center pb-10">
                    <button
                      type="submit"
                      className="h-11 border rounded-md hover:bg-[#3ea95c] hover:text-white px-3 "
                    >
                      Register
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="flex gap-3">
              <p>Already have an account?</p>
              <Link to="/login">
                <p className="text-[#3ea95c]">Register</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterCom;
