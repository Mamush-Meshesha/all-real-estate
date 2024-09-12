import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {  uploadImageRequest } from "../slice/homeSlice"; 
import { useState } from "react";

const ImageUpload = () => {
  const [images, setImages] = useState([]);
  const { loading } = useSelector((state) => state.property); 
  const dispatch = useDispatch();


  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      url: URL.createObjectURL(file),
      file,
    }));

    setImages((prevImages) => [...prevImages, ...newImages]);
console.log(files)
    files.forEach((file) => {
      const formData = new FormData();
      formData.append("image", file);
      dispatch(uploadImageRequest(formData)); 
    });
  };


  const handleImageDelete = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
  };

  return (
    <div className="p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 border min-h-[100px] max-h-[350px] rounded-lg ">
        {/* Upload Input */}
        <div className="flex items-center justify-center">
          <label className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-all duration-300">
            {loading ? "Uploading..." : "Select Images"}
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        </div>

        {/* Image Preview Section */}
        {images?.length > 0 && (
          <div className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative h-[230px] w-[200px] border-2 border-dashed border-green-500  group rounded-lg overflow-hidden shadow-lg"
              >
                {/* Image Preview */}
                <img
                  src={image.url}
                  alt={`preview-${index}`}
                  className="w-full h-[99%] object-cover rounded-lg p-2 "
                />

                {/* Delete Button */}
                <div
                  className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  onClick={() => handleImageDelete(index)}
                >
                  <MdDelete className="text-xl" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
