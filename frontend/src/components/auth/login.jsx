
const Login = () => {
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
          <div className="bg-white w-full flex items-center h-full justify-center  border py-10 md:px-20 px-5 rounded-lg">
            <div>
              <div className="flex justify-center py-5">
                <h1 className="capitalize">Login in to your account</h1>
              </div>

              <form>
                <div className="">
                  <div className="pb-3">
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="Email Addess"
                      className="h-11 px-3 border rounded-md w-full"
                    />
                  </div>

                  <div className="pb-3">
                    <input
                      type="password"
                      name=""
                      id=""
                      placeholder="Password"
                      className="h-11 px-3 border rounded-md w-full"
                    />
                  </div>
                  <div className="flex justify-center pb-10">
                    <button className="h-11 border rounded-md hover:bg-[#3ea95c] hover:text-white px-3 ">
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
