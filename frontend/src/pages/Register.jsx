import { useState } from 'react';
import API from '../api/axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await API.post('/auth/register', formData);
      alert("Registration Done! Now Login.");
      navigate('/login');
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <form onSubmit={handleRegister} className="bg-white p-8 rounded-2xl shadow-lg w-96 border">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <input 
          type="text" placeholder="Name" className="w-full p-3 border rounded-lg mb-4"
          onChange={(e) => setFormData({...formData, name: e.target.value})} required
        />
        <input 
          type="email" placeholder="Email" className="w-full p-3 border rounded-lg mb-4"
          onChange={(e) => setFormData({...formData, email: e.target.value})} required
        />
        <input 
          type="password" placeholder="Password" className="w-full p-3 border rounded-lg mb-6"
          onChange={(e) => setFormData({...formData, password: e.target.value})} required
        />
        <button type="submit" className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Register;