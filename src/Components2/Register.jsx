import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData));
    alert("Registration Successful!");
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-slate-500 to-white">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-aqua-500"
            required
          />
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
            Register
          </button>
        </form>
        <p className="text-center text-black mt-4">
          Already have an account?  <div onClick={()=>navigate('/')} className="text-aqua-500 font-semibold">Login</div>
        </p>
      </div>
    </div>
  );
};

export default Register;
