import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemCard from '../components/ItemCard';

function HomePage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true); // loading state

  // Function to fetch items
  const fetchItems = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/products'); // your backend route
      setItems(res.data.data);  // Assuming the data is in 'data'
    } catch (error) {
      console.error('Error fetching items:', error);
    } finally {
      setLoading(false); // no matter what, stop loading
    }
  };

  useEffect(() => {
    fetchItems();
  }, []); // Fetch items when the component mounts

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex justify-center items-center">
        <div className="text-white text-2xl animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <div className="h-[90vh] bg-gray-900 flex flex-wrap gap-8 justify-center items-center p-8">
      {items.map(item => (
        <ItemCard 
          key={item._id} 
          name={item.name}
          price={item.price}
          image={item.image}
          item={item} // Passing item for deletion
          fetchItems={fetchItems} // Pass fetchItems function
        />
      ))}
    </div>
  );
}

export default HomePage;
