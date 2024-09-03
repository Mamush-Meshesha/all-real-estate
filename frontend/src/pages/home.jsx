import Header from "../components/header";
import { FiLink2 } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineBedroomChild } from "react-icons/md";
import { MdOutlineBathroom } from "react-icons/md";
import { GiMechanicGarage } from "react-icons/gi";



const Home = () => {
  return (
    <div>
      <Header />
      {/* center icon */}
      <div className="md:pt-[24.3rem] pt-[14rem] flex justify-center ">
        <FiLink2 className="text-7xl text-[#5483a3] rotate-[135deg] relative z-40 " />
      </div>
      {/* top rated real estate */}
      <div>
        <div className="py-10">
          <h1 className="flex justify-center text-6xl font-sevillana ">
            Top Rated Real Estate In Addis Ababa
          </h1>
          <div className="container mx-auto pt-10">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 ">
              <div
                style={{ background: "hsla(0, 0%, 100%, 1)" }}
                className="h-[19rem] max-w-[450px] relative rounded-lg "
              >
                <img
                  src="/assets/Estate/1.jpg"
                  alt="not found"
                  className="rounded-lg h-full  object-cover"
                />
                <div>
                  <div className="flex items-center px-4 absolute top-0 gap-4 pt-3">
                    <button
                      className="px-3 bg-[#36a33f] h-8 text-white rounded-md "
                      style={{ background: "hsla(0, 0%, 50%, 0.6)" }}
                    >
                      Buy
                    </button>
                    <button
                      className="px-3 bg-[#36a33f] h-8 text-white rounded-md "
                      style={{ background: "hsla(0, 0%, 50%, 0.6)" }}
                    >
                      Rent
                    </button>
                  </div>
                </div>
                <div
                  className="absolute z-40 bottom-0 flex flex-col p-3 w-full "
                  style={{ background: "hsla(0, 0%, 50%, 0.6)" }}
                >
                  <h1 className=" text-white">Price: $54600</h1>
                  <h1 className=" text-white">Location: kasanchis</h1>
                </div>
              </div>
              <div
                style={{ background: "hsla(0, 0%, 100%, 1)" }}
                className="h-[19rem] relative rounded-lg max-w-[450px] "
              >
                <img
                  src="/assets/Estate/1.jpg"
                  alt="not found"
                  className="rounded-lg h-full  object-cover"
                />
                <div>
                  <div className="flex items-center px-4 absolute top-0 gap-4 pt-3">
                    <button
                      className="px-3 bg-[#36a33f] h-8 text-white rounded-md "
                      style={{ background: "hsla(0, 0%, 50%, 0.6)" }}
                    >
                      Buy
                    </button>
                    <button
                      className="px-3 bg-[#36a33f] h-8 text-white rounded-md "
                      style={{ background: "hsla(0, 0%, 50%, 0.6)" }}
                    >
                      Rent
                    </button>
                  </div>
                </div>
                <div
                  className="absolute z-40 bottom-0 flex flex-col p-3 w-full "
                  style={{ background: "hsla(0, 0%, 50%, 0.6)" }}
                >
                  <h1 className=" text-white">Price: $54600</h1>
                  <h1 className=" text-white">Location: kasanchis</h1>
                </div>
              </div>
              <div
                style={{ background: "hsla(0, 0%, 100%, 1)" }}
                className="h-[19rem] relative rounded-lg max-w-[450px] "
              >
                <img
                  src="/assets/Estate/1.jpg"
                  alt="not found"
                  className="rounded-lg h-full  object-cover"
                />
                <div>
                  <div className="flex items-center px-4 absolute top-0 gap-4 pt-3">
                    <button
                      className="px-3 bg-[#36a33f] h-8 text-white rounded-md "
                      style={{ background: "hsla(0, 0%, 50%, 0.6)" }}
                    >
                      Buy
                    </button>
                    <button
                      className="px-3 bg-[#36a33f] h-8 text-white rounded-md "
                      style={{ background: "hsla(0, 0%, 50%, 0.6)" }}
                    >
                      Rent
                    </button>
                  </div>
                </div>
                <div
                  className="absolute z-40 bottom-0 flex flex-col p-3 w-full "
                  style={{ background: "hsla(0, 0%, 50%, 0.6)" }}
                >
                  <h1 className=" text-white">Price: $54600</h1>
                  <h1 className=" text-white">Location: kasanchis</h1>
                </div>
              </div>
              <div
                style={{ background: "hsla(0, 0%, 100%, 1)" }}
                className="h-[19rem] relative rounded-lg max-w-[450px] "
              >
                <img
                  src="/assets/Estate/1.jpg"
                  alt="not found"
                  className="rounded-lg h-full  object-cover"
                />
                <div>
                  <div className="flex items-center px-4 absolute top-0 gap-4 pt-3">
                    <button
                      className="px-3 bg-[#36a33f] h-8 text-white rounded-md "
                      style={{ background: "hsla(0, 0%, 50%, 0.6)" }}
                    >
                      Buy
                    </button>
                    <button
                      className="px-3 bg-[#36a33f] h-8 text-white rounded-md "
                      style={{ background: "hsla(0, 0%, 50%, 0.6)" }}
                    >
                      Rent
                    </button>
                  </div>
                </div>
                <div
                  className="absolute z-40 bottom-0 flex flex-col p-3 w-full "
                  style={{ background: "hsla(0, 0%, 50%, 0.6)" }}
                >
                  <h1 className=" text-white">Price: $54600</h1>
                  <h1 className=" text-white">Location: kasanchis</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* catagory */}
        <div>
          <div className="container mx-auto">
            <div>
              <h1 className="font-roboto text-4xl">Popular Catagories</h1>
            </div>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                <div className="h-[17rem] rounded-md relative group ">
                  <img
                    src="/assets/Estate/1.jpg"
                    alt=""
                    className="w-full h-full object-cover rounded-md"
                  />
                  <div
                    className=" z-40 absolute bottom-0 mb-16 left-0  flex flex-col  w-full"
                    style={{ background: "hsla(0, 0%, 50%, 0.6)" }}
                  >
                    {/* <h1 className="text-white group-hover:hidden ">
                      Location: kasanchis
                    </h1> */}
                    <h1 className="text-hsla(210, 100%, 50%, 0.8) opacity-0 group-hover:opacity-100 text-white absolute top-1/2 left-1/2 transition-opacity duration-300">
                      Category: Your Category Name
                    </h1>
                  </div>
                </div>
                <div className="h-[17rem] rounded-md relative group ">
                  <img
                    src="/assets/Estate/ts.jpg"
                    alt=""
                    className="w-full h-full object-cover rounded-md"
                  />
                  <div
                    className=" z-40  flex flex-col p-3 w-full"
                    style={{ background: "hsla(1, 100%, 1, 0.9)" }}
                  >
                    <h1 className="text-white group-hover:hidden ">
                      Location: kasanchis
                    </h1>
                    <h1 className="text-hsla(210, 100%, 50%, 0.8) opacity-0 group-hover:opacity-100 text-white absolute top-1/2 left-1/2 transition-opacity duration-300">
                      Category: Your Category Name
                    </h1>
                  </div>
                </div>
                <div className="h-[17rem] rounded-md relative group ">
                  <img
                    src="/assets/Estate/sun.jpg"
                    alt=""
                    className="w-full h-full object-cover rounded-md"
                  />
                  <div
                    className=" z-40  flex flex-col p-3 w-full"
                    style={{ background: "hsla(1, 100%, 1, 0.9)" }}
                  >
                    <h1 className="text-white group-hover:hidden ">
                      Location: kasanchis
                    </h1>
                    <h1 className="text-hsla(210, 100%, 50%, 0.8) opacity-0 group-hover:opacity-100 text-white absolute top-1/2 left-1/2 transition-opacity duration-300">
                      Category: Your Category Name
                    </h1>
                  </div>
                </div>
                <div className="h-[17rem] rounded-md relative group ">
                  <img
                    src="/assets/Estate/noah.jpg"
                    alt=""
                    className="w-full h-full object-cover rounded-md"
                  />
                  <div
                    className=" z-40  flex flex-col p-3 w-full"
                    style={{ background: "hsla(1, 100%, 1, 0.9)" }}
                  >
                    <h1 className="text-white group-hover:hidden ">
                      Location: kasanchis
                    </h1>
                    <h1 className="text-hsla(210, 100%, 50%, 0.8) opacity-0 group-hover:opacity-100 text-white absolute top-1/2 left-1/2 transition-opacity duration-300">
                      Category: Your Category Name
                    </h1>
                  </div>
                </div>
                <div className="h-[17rem] rounded-md relative group">
                  <img
                    src="/assets/Estate/met.jpg"
                    alt=""
                    className="w-full h-full object-cover rounded-md"
                  />
                  <div
                    className=" z-40  flex flex-col p-3 w-full"
                    style={{ background: "hsla(1, 100%, 1, 0.9)" }}
                  >
                    <h1 className="text-white group-hover:hidden ">
                      Location: kasanchis
                    </h1>
                    <h1 className="text-hsla(210, 100%, 50%, 0.8) opacity-0 group-hover:opacity-100 text-white absolute top-1/2 left-1/2 transition-opacity duration-300">
                      Category: Your Category Name
                    </h1>
                  </div>
                </div>
                <div className="h-[17rem] rounded-md relative group">
                  <img
                    src="/assets/Estate/fli.jpg"
                    alt=""
                    className="w-full h-full object-cover rounded-md"
                  />
                  <div
                    className=" z-40  flex flex-col p-3 w-full"
                    style={{ background: "hsla(1, 100%, 1, 0.9)" }}
                  >
                    <h1 className="text-white group-hover:hidden ">
                      Location: kasanchis
                    </h1>
                    <h1 className="text-hsla(210, 100%, 50%, 0.8) opacity-0 group-hover:opacity-100 text-white absolute top-1/2 left-1/2 transition-opacity duration-300">
                      Category: Your Category Name
                    </h1>
                  </div>
                </div>
                <div className="h-[17rem] rounded-md relative group">
                  <img
                    src="/assets/Estate/gift.jpg"
                    alt=""
                    className="w-full h-full object-cover rounded-md"
                  />
                  <div
                    className=" z-40  flex flex-col p-3 w-full"
                    style={{ background: "hsla(1, 100%, 1, 0.9)" }}
                  >
                    <h1 className="text-white group-hover:hidden ">
                      Location: kasanchis
                    </h1>
                    <h1 className="text-hsla(210, 100%, 50%, 0.8) opacity-0 group-hover:opacity-100 text-white absolute top-1/2 left-1/2 transition-opacity duration-300">
                      Category: Your Category Name
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* all real state */}
      <div className="bg-[#f5f0f0] mt-10">
        <div>
          <div className="container mx-auto py-6">
            <h1>Explore</h1>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2  xl:grid-cols-4  ">
              <div className="h-[400px] flex-1 border rounded-md bg-white">
                <div className="p-4 h-full">
                  <img
                    src="/assets/Estate/gift.jpg"
                    alt=""
                    className="w-full h-[70%] object-cover  rounded-md rounded-b-none "
                  />
                  <div className="pt-3">
                    <div className="flex gap-2">
                      <h1 className="font-roboto sm:text-xl text-xs font-bold">
                        Gift Real Estate
                      </h1>
                      <h1 className="text-[#48a3af] sm:text-xl text-xs">
                        Br. 14,565,656
                      </h1>
                    </div>
                    <div className="py-3 border-b">
                      <div className="flex gap-3 items-center">
                        <CiLocationOn className="text-[#48a3af]" />
                        <h1 className="font-roboto">Ayat / Addis Ababa</h1>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 py-2">
                      <div className="flex gap-2 items-center">
                        <MdOutlineBedroomChild className="text-[#48a3af]" />
                        <h1 className="whitespace-nowrap truncate  text-xs font-roboto ">
                          2 Bed Rooms
                        </h1>
                      </div>
                      <div className="flex gap-2 items-center">
                        <MdOutlineBathroom className="text-[#48a3af]" />
                        <h1 className="whitespace-nowrap truncate text-xs font-roboto ">
                          1 Bath Rooms
                        </h1>
                      </div>
                      <div className="flex gap-2 items-center">
                        <GiMechanicGarage className="text-[#48a3af]" />
                        <h1 className="whitespace-nowrap truncate text-xs font-roboto ">
                          1 Garage
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* one card */}
              <div className="h-[400px] flex-1 border rounded-md bg-white">
                <div className="p-4 h-full">
                  <img
                    src="/assets/Estate/fli.jpg"
                    alt=""
                    className="w-full h-[70%] object-cover  rounded-md rounded-b-none "
                  />
                  <div className="pt-3">
                    <div className="flex gap-2">
                      <h1 className="font-roboto sm:text-xl text-xs font-bold">
                        Gift Real Estate
                      </h1>
                      <h1 className="text-[#48a3af] sm:text-xl text-xs">
                        Br. 14,565,656
                      </h1>
                    </div>
                    <div className="py-3 border-b">
                      <div className="flex gap-3 items-center">
                        <CiLocationOn className="text-[#48a3af]" />
                        <h1 className="font-roboto">Ayat / Addis Ababa</h1>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 py-2">
                      <div className="flex gap-2 items-center">
                        <MdOutlineBedroomChild className="text-[#48a3af]" />
                        <h1 className="whitespace-nowrap truncate  text-xs font-roboto ">
                          2 Bed Rooms
                        </h1>
                      </div>
                      <div className="flex gap-2 items-center">
                        <MdOutlineBathroom className="text-[#48a3af]" />
                        <h1 className="whitespace-nowrap truncate text-xs font-roboto ">
                          1 Bath Rooms
                        </h1>
                      </div>
                      <div className="flex gap-2 items-center">
                        <GiMechanicGarage className="text-[#48a3af]" />
                        <h1 className="whitespace-nowrap truncate text-xs font-roboto ">
                          1 Garage
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="h-[400px] flex-1 border rounded-md bg-white">
                <div className="p-4 h-full">
                  <img
                    src="/assets/Estate/sun.jpg"
                    alt=""
                    className="w-full h-[70%] object-cover  rounded-md rounded-b-none "
                  />
                  <div className="pt-3">
                    <div className="flex gap-2">
                      <h1 className="font-roboto sm:text-xl text-xs font-bold">
                        Gift Real Estate
                      </h1>
                      <h1 className="text-[#48a3af] sm:text-xl text-xs">
                        Br. 14,565,656
                      </h1>
                    </div>
                    <div className="py-3 border-b">
                      <div className="flex gap-3 items-center">
                        <CiLocationOn className="text-[#48a3af]" />
                        <h1 className="font-roboto">Ayat / Addis Ababa</h1>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 py-2">
                      <div className="flex gap-2 items-center">
                        <MdOutlineBedroomChild className="text-[#48a3af]" />
                        <h1 className="whitespace-nowrap truncate  text-xs font-roboto ">
                          2 Bed Rooms
                        </h1>
                      </div>
                      <div className="flex gap-2 items-center">
                        <MdOutlineBathroom className="text-[#48a3af]" />
                        <h1 className="whitespace-nowrap truncate text-xs font-roboto ">
                          1 Bath Rooms
                        </h1>
                      </div>
                      <div className="flex gap-2 items-center">
                        <GiMechanicGarage className="text-[#48a3af]" />
                        <h1 className="whitespace-nowrap truncate text-xs font-roboto ">
                          1 Garage
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="h-[400px] flex-1 border rounded-md bg-white">
                <div className="p-4 h-full">
                  <img
                    src="/assets/Estate/ts.jpg"
                    alt=""
                    className="w-full h-[70%] object-cover  rounded-md rounded-b-none "
                  />
                  <div className="pt-3">
                    <div className="flex gap-2">
                      <h1 className="font-roboto sm:text-xl text-xs font-bold">
                        Gift Real Estate
                      </h1>
                      <h1 className="text-[#48a3af] sm:text-xl text-xs">
                        Br. 14,565,656
                      </h1>
                    </div>
                    <div className="py-3 border-b">
                      <div className="flex gap-3 items-center">
                        <CiLocationOn className="text-[#48a3af]" />
                        <h1 className="font-roboto">Ayat / Addis Ababa</h1>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 py-2">
                      <div className="flex gap-2 items-center">
                        <MdOutlineBedroomChild className="text-[#48a3af]" />
                        <h1 className="whitespace-nowrap truncate  text-xs font-roboto ">
                          2 Bed Rooms
                        </h1>
                      </div>
                      <div className="flex gap-2 items-center">
                        <MdOutlineBathroom className="text-[#48a3af]" />
                        <h1 className="whitespace-nowrap truncate text-xs font-roboto ">
                          1 Bath Rooms
                        </h1>
                      </div>
                      <div className="flex gap-2 items-center">
                        <GiMechanicGarage className="text-[#48a3af]" />
                        <h1 className="whitespace-nowrap truncate text-xs font-roboto ">
                          1 Garage
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div>
        <div className="pt-10">
          <div className="flex justify-center py-5 border-t-2">
            <h1>&copy; 2024 all in one</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
