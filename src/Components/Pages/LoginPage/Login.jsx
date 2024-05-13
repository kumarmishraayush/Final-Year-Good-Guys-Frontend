import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CiLock } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' })); // Clear error on change
  };

  const handleSubmit =  async(e) => {
    e.preventDefault();
    // Basic validation
    let valid = true;
    const newErrors = { email: '', password: '' };

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
      valid = false;
    }

    if (valid) {
      console.log('Form data:', formData);
      // Proceed with form submission or other actions
      try {
        const response = await axios.post('http://localhost:8000/api/v1/users/login', {
          email: formData.email,
          password: formData.password,
        });
        alert('Login successful:', response.data);
        // Handle successful login, such as setting user state or redirecting to another page
      } catch (error) {
        if (error.response && error.response.status === 401) {
          alert('Invalid credentials. Please check your email and password.');
        } else {
          alert('User not existed please try again');
          
        }
      }
    } 
  };

  return (
    <motion.div
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
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
              {errors.email && <span className="error">{errors.email}</span>}
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
              {errors.password && <span className="error">{errors.password}</span>}
            </div>
            <motion.button
              className="login-submit"
              type="submit"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Login
            </motion.button>
          </form>
          <span>Don't have an account?</span>
          <Link to="/register">SignUp</Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Login;
