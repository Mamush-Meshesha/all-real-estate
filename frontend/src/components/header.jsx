import { IoIosMenu } from "react-icons/io";

const Header = () => {
    
    return (
      <div>
        <div>
          <div>
            <div>
              <img
                src="/assets/images/ayat.jpg"
                alt=""
                className=" w-full h-[20rem] md:h-[30rem] bg-cover bg-no-repeat absolute top-0 left-0 z-20"
              />
            </div>
            <div className="bg-[#4966af] h-[20rem] md:h-[30rem] w-full bg-opacity-[0.001] backdrop-filter backdrop-blur-sm absolute top-0 left-0 z-30 "></div>

            <div className="relative z-40 hidden  text-white container mx-auto md:flex items-center justify-between border-b border-[#b3b1b1]  h-16 text-2xl gap-10">
              <div className="flex gap-10 font-roboto">
                <h1>All-In-One</h1>
                <h1>Home</h1>
                <h1>Management</h1>
                <h1>Services</h1>
                <h1>Contact Us</h1>
              </div>
              <div className="w-[2.5rem] h-[2.5rem] rounded-full ">
                <img
                  src="https://puqqu.com/wp-content/uploads/2024/02/black-girl-aesthetic-pfp-1.jpg"
                  alt="profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            <div className="text-black absolute  z-40 flex justify-center items-center w-full  h-[20rem]">
              <div>
                <div>
                  <input
                    type="search"
                    placeholder="Search"
                    className="h-12 px-3 rounded-md flex-1 bg-[#c0bebe] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
            {/* smaller screen */}
            <div className="z-40 relative ">
              <div className="flex md:hidden justify-between px-3 h-16 items-center ">
                <IoIosMenu className="text-4xl" />
                <div className="w-[2.5rem] h-[2.5rem] rounded-full ">
                  <img
                    src="https://puqqu.com/wp-content/uploads/2024/02/black-girl-aesthetic-pfp-1.jpg"
                    alt="profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
            {/* end of small screen header */}
          </div>
        </div>
      </div>
    );
}

export default Header