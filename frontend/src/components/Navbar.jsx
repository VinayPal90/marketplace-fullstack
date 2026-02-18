import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
    window.location.reload();
  };

  return (
    <nav className="bg-white shadow-sm border-b p-4 sticky top-0 z-50">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold text-blue-600 tracking-tight">
          Micro<span className="text-gray-800">Market</span>
        </Link>
        
        {/* Links & Auth */}
        <div className="flex items-center gap-4 sm:gap-6 text-sm md:text-base">
          <Link to="/" className="font-medium text-gray-600 hover:text-blue-600 transition">Products</Link>
          {token ? (
            <button 
              onClick={logout} 
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition shadow-md shadow-red-100"
            >
              Logout
            </button>
          ) : (
            <div className="flex items-center gap-2 sm:gap-4">
              <Link to="/login" className="text-gray-600 font-medium hover:text-blue-600">Login</Link>
              <Link 
                to="/register" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition shadow-md shadow-blue-100"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;