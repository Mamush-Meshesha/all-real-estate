import { CiLocationOn } from "react-icons/ci";
import { MdOutlineBedroomChild } from "react-icons/md";
import { MdOutlineBathroom } from "react-icons/md";
import { GiMechanicGarage } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPropertyRequest } from "../slice/homeSlice";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

const Home = () => {
  const { house } = useSelector((state) => state.property);
  const dispatch = useDispatch();
  console.log(house);
  useEffect(() => {
    dispatch(fetchPropertyRequest());
  }, [dispatch]);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate each category item as it scrolls into view
    gsap.from(".category-item", {
      scrollTrigger: {
        trigger: ".category-item",
        start: "top 50%", // Animation starts when the item enters 80% of the viewport
        toggleActions: "play none none none", // Animation triggers once
        markers: false, // Set to true if you want to debug scroll positions
      },
      opacity: 0,
      scale: 0.5,
      duration: 1,
      stagger: 0.2, // Creates a delay between items for a smoother effect
      ease: "power4.out",
    });
  }, []);
  return (
    <div>
      {/* center icon */}

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
            <div className="py-5 ">
              <h1 className="font-roboto text-4xl">Popular Catagories</h1>
            </div>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {house && house.length > 0 ? (
                  house.map((tit, index) => (
                    <div key={index}>
                      <div className="category-item group relative h-[300px] w-[300px] mx-auto rounded-full overflow-hidden transform scale-90 hover:scale-100 transition-transform duration-700 ease-out">
                        <img
                          src={tit.image}
                          alt="Category Image"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                          <h1 className="text-white text-lg font-bold capitalize">
                            {tit.name}
                          </h1>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>nothing</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* all real state */}
      <div className="bg-[#f5f0f0] mt-10">
        <div>
          <div className="container mx-auto py-6">
            <h1 className="py-3 md:text-2xl lg:text-3xl">Explore</h1>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2  xl:grid-cols-4  ">
              {house && house.length > 0 ? (
                house.map((pro, _id) => (
                  <div key={_id}>
                    <Link to={`/detail/${_id}`} className="h-[400px] flex-1 border rounded-md bg-white">
                      <div className="p-4 h-full">
                        <img
                          src={pro.image}
                          alt=""
                          className="w-full h-[70%] object-cover rounded-md rounded-b-none"
                        />
                        <div className="pt-3">
                          <div className="flex gap-2">
                            <h1 className="font-roboto sm:text-xl text-xs font-bold">
                              {pro.name}
                            </h1>
                            <h1 className="text-[#48a3af] sm:text-xl text-xs">
                              Br. {pro.price}
                            </h1>
                          </div>
                          <div className="py-3 border-b">
                            <div className="flex gap-3 items-center">
                              <CiLocationOn className="text-[#48a3af]" />
                              <h1 className="font-roboto">
                                {pro.location} / Addis Ababa
                              </h1>
                            </div>
                          </div>
                          <div className="grid grid-cols-3 py-2">
                            <div className="flex gap-2 items-center">
                              <MdOutlineBedroomChild className="text-[#48a3af]" />
                              <h1 className="whitespace-nowrap truncate text-xs font-roboto ">
                                {pro.number_of_bedroom} bed rooms
                              </h1>
                            </div>
                            <div className="flex gap-2 items-center">
                              <MdOutlineBathroom className="text-[#48a3af]" />
                              <h1 className="whitespace-nowrap truncate text-xs font-roboto ">
                                {pro.number_of_bathroom} Bath Rooms
                              </h1>
                            </div>
                            <div className="flex gap-2 items-center">
                              <GiMechanicGarage className="text-[#48a3af]" />
                              <h1 className="whitespace-nowrap truncate text-xs font-roboto ">
                                {pro.garage} Garage
                              </h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <p>No properties found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
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
};

export default Home;
