import { useState } from 'react';
import API from '../api/axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post('/auth/login', { email, password });
      localStorage.setItem('token', data.token);
      alert("Login Successful!");
      navigate('/');
      window.location.reload(); // Navbar update karne ke liye
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-2xl shadow-lg w-96 border">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <input 
          type="email" placeholder="Email" className="w-full p-3 border rounded-lg mb-4"
          onChange={(e) => setEmail(e.target.value)} required
        />
        <input 
          type="password" placeholder="Password" className="w-full p-3 border rounded-lg mb-6"
          onChange={(e) => setPassword(e.target.value)} required
        />
        <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;