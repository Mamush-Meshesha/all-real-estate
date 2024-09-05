
const Detail = () => {
    

    return (
      <div>
        <div className="container mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <img
              src="/assets/Estate/fli.jpg"
              alt="Estate Image"
              className="rounded-lg shadow-lg w-full"
            />
            <div className="px-4 md:px-6 flex flex-col justify-center space-y-4">
              <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
                Location: <span className="text-blue-600">Kasanchis</span>
              </h1>
              <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
                Category:{" "}
                <span className="text-blue-600">Your Category Name</span>
              </h1>
              <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
                Price: <span className="text-green-600">$1000</span>
              </h1>
              <h1 className="text-lg md:text-xl text-gray-600">
                Description: Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </h1>
              <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
                Owner: <span className="text-blue-600">John Doe</span>
              </h1>
            </div>
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