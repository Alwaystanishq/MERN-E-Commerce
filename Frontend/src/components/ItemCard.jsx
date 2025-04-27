import React from "react";
import axios from "axios";

const ItemCard = ({ name, price, image, item, fetchItems }) => {

  const handleDelete = async () => {
    try {
      // Ensure the item has _id before attempting to delete
      if (!item._id) {
        console.error("Item ID is missing");
        return;
      }

      await axios.delete(`http://localhost:5000/api/products/${item._id}`);
      console.log('Item deleted:', item._id);

      // After delete, refetch items
      fetchItems();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };
  
  return (
    <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform w-64">
      <img
        className="w-full h-40 object-cover"
        src={image} // Assuming image is a URL
        alt={name}
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{name}</h2>
        <p className="text-green-400 font-bold mb-4">${price}</p>

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            onClick={handleDelete}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
