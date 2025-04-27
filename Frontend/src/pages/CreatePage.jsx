import React, { useState } from "react";
import axios from 'axios'

function CreatePage() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      price,
      image
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/api/products/",
        formData
      );
      console.log("Data posted successfully:", response.data);

      // Optionally reset form after success
      setImage('');
      setName('')
      setPrice('')


      // You could also show a success message
      alert("Product created successfully!");
    } catch (error) {
      console.error("Error posting data:", error);
      alert("Failed to create product.");
    }
  };

  return (
    <div className="h-[90vh] flex items-center justify-center bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded shadow-md w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-white">
          Create New Product
        </h2>

        {/* Name input */}
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product Name"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 border-gray-600 text-white"
          required
        />

        {/* Price input */}
        <input
          type="number"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 border-gray-600 text-white"
          required
        />

        {/* image link input */}
        <input
          type="text"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image URL"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 border-gray-600 text-white"
          required
        />

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreatePage;
