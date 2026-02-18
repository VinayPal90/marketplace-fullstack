import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
    const handleFavorite = async () => {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            alert("Please login first!");
            return;
        }
        await API.post(`/products/favorite/${product._id}`);
        alert("Favorite status updated!");
    } catch (err) {
        console.error("Error updating favorite", err);
    }
  };

  return (
    <motion.div 
      whileHover={{ y: -10, scale: 1.02 }} 
      whileTap={{ scale: 0.98 }}
      className="bg-white border p-4 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      <img 
        src={product.image} 
        alt={product.title} 
        className="w-full h-48 object-cover rounded-xl"
      />
      <div className="mt-4">
        <h3 className="font-bold text-lg text-gray-800">{product.title}</h3>
        <p className="text-gray-500 text-sm line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-blue-600">₹{product.price}</span>
          <button 
      onClick={handleFavorite}
      className="bg-gray-100 p-2 rounded-full hover:bg-red-50 text-red-500"
    >
      ❤
    </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;