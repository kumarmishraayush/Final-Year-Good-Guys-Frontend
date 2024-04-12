import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Your login logic here
      console.log('Logging in...');
    }
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.email) {
      errors.email = 'Email is required';
    }
    if (!data.password) {
      errors.password = 'Password is required';
    }
    return errors;
  };

  return (
    <div className='login-main'>
      <h1 className='login-text'>
        Login
        <img src="login-png.png" className='login-image' alt="login-png" />
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
