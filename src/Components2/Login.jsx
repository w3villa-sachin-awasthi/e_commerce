import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    
    if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
      alert("Login Successful!");
      navigate("/home");
    } else {
      alert("Invalid Credentials!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-white to-aqua-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-aqua-500"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-aqua-500"
            required
          />
          <button type="submit" className="bg-aqua-500 text-black py-3 rounded-lg font-semibold hover:bg-aqua-700 transition">
            Login
          </button>
        </form>
        <p className="text-center text-black mt-4">
          Don't have an account? <div onClick={()=>navigate('/register')} className="text-aqua-500 font-semibold">Register</div>
        </p>
      </div>
    </div>
  );
};

export default Login;
