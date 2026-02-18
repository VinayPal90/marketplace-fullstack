import { useState, useEffect } from 'react';
import API from '../api/axios';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchProducts = async () => {
    try {
      // Backend se products mangwana
      const { data } = await API.get(`/products?search=${search}&page=${page}&limit=8`);
      setProducts(data.products);
      setTotalPages(data.totalPages);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [search, page]);

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      {/* 1. Search Bar Section (Ab responsive hai) */}
      <div className="max-w-2xl mx-auto mb-10 mt-6 px-4">
        <div className="relative group">
          <input 
            type="text" 
            placeholder="Search for amazing products..." 
            className="w-full p-4 pl-12 bg-white border-2 border-gray-100 rounded-2xl shadow-sm focus:border-blue-400 outline-none transition-all"
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2">🔍</span>
        </div>
      </div>

      {/* 2. Responsive Grid Logic */}
      <div className="container mx-auto px-4">
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center mt-20 text-gray-500">
            <p className="text-xl">No products found. Seed the database or check backend!</p>
          </div>
        )}
      </div>

      {/* 3. Pagination Section */}
      <div className="flex justify-center mt-12 gap-4">
         <button 
           disabled={page === 1}
           onClick={() => setPage(p => p - 1)}
           className="px-6 py-2 bg-white border rounded-lg shadow-sm hover:bg-gray-50 disabled:opacity-50"
         >
           Previous
         </button>
         <span className="py-2 font-medium">Page {page} of {totalPages}</span>
         <button 
           disabled={page === totalPages}
           onClick={() => setPage(p => p + 1)}
           className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 disabled:opacity-50"
         >
           Next
         </button>
      </div>
    </div>
  );
};

export default Home; // <--- ISSE CHECK KARO!