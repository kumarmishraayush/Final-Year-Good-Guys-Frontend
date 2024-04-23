import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CiLock } from 'react-icons/ci';
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // You can add further logic like sending the data to an API here
  };

  return (
    <motion.div
      initial={{ x: -1000 }} // Initial position outside the viewport
      animate={{ x: 0 }} // Move to x=0 (center of the viewport)
      transition={{ duration: 0.5 }} // Animation duration
      className="login-main-container"
    >
      <div className="login-main">
        <div className="lock">
          <CiLock size={50} />
        </div>
        <div className="login-header">Login</div>

        <div className="login-body">
          <form onSubmit={handleSubmit}>
            Enter Your Email
            <div className="login-email">
              <input
                type="text"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            Enter Your Password
            <div className="login-password">
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <motion.button className='login-submit'
              type="submit"
              whileHover={{ scale: 1.1 }} // Scale animation on hover
              whileTap={{ scale: 0.9 }} // Scale animation on tap/click
            >
              Login
            </motion.button>
          </form>
          <span>Don't have an account?</span>
          <a href="/signup">Signup</a>
        </div>
      </div>
    </motion.div>
  );
}

export default Login;
