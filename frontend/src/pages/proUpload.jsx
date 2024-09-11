import Upload from "../components/upload"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPropertyRequest } from "../slice/homeSlice";
const ProUPload = () => {
 const [formData, setFormData] = useState({
   name: "",
   location: "",
   price: "",
   number_of_bedroom: "",
   number_of_bathroom: "",
   description: "",
   garage: "",
 });
 const { loading, error } = useSelector((state) => state.property); 
 const dispatch = useDispatch();
  const { image } = useSelector(state => state.property)
const secureUrl = image?.data?.[0]?.secure_url;

console.log(secureUrl);
 const handleInputChange = (e) => {
   const { name, value } = e.target;
   setFormData({ ...formData, [name]: value });
 };



 const handleSubmit = (e) => {
   e.preventDefault();

   const payload = { ...formData, image: secureUrl };
   dispatch(createPropertyRequest(payload));
 };

 
    return (
      <div>
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Upload Real Estate Property
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label className="block text-gray-600">Property Name*</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter the property name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* Location Input */}
            <div>
              <label className="block text-gray-600">Location*</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="Enter the property location"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* Price Input */}
            <div>
              <label className="block text-gray-600">Price*</label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                placeholder="Enter the price"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* Number of Bedrooms Input */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-600">
                  Number of Bedrooms
                </label>
                <input
                  type="text"
                  name="number_of_bedroom"
                  value={formData.number_of_bedroom}
                  onChange={handleInputChange}
                  placeholder="e.g. 3"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Number of Bathrooms Input */}
              <div>
                <label className="block text-gray-600">
                  Number of Bathrooms
                </label>
                <input
                  type="text"
                  name="number_of_bathroom"
                  value={formData.number_of_bathroom}
                  onChange={handleInputChange}
                  placeholder="e.g. 2"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Garage Input */}
            <div>
              <label className="block text-gray-600">Garage</label>
              <input
                type="text"
                name="garage"
                value={formData.garage}
                onChange={handleInputChange}
                placeholder="Yes/No"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Description Input */}
            <div>
              <label className="block text-gray-600">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Describe the property"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                rows="4"
              />
            </div>

            <Upload />

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                {loading ? "Uploading..." : "Upload Property"}
              </button>
            </div>
          </form>

          {/* Error Display */}
          {error && (
            <div className="mt-4 text-red-600 font-bold">
              {error.message || "An error occurred during upload."}
            </div>
          )}
        </div>
      </div>
    );
}

export default ProUPload