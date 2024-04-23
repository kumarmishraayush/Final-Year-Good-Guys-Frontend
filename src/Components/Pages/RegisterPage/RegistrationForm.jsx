import React, { useState } from "react";
import "./Register.css"; // Import your CSS file for styling
import { Link } from "react-router-dom";

import { PiTrademarkRegistered } from "react-icons/pi";
import { motion } from "framer-motion";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    avatar: "",
    coverImage: "",
    email: "",
    password: "",
    homeAddress: "",
    contactNumber: "",
    about: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    // Clear the error message when the user starts typing again
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation before submitting
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // Stop form submission if there are errors
    }
    // Form is valid, you can proceed with submitting the data or other actions
    console.log("Form data:", formData);
  };

  const validateForm = (data) => {
    const errors = {};
    // Basic validation for required fields and email format
    if (!data.fullName.trim()) {
      errors.fullName = "Full Name is required";
    }
    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(data.email)) {
      errors.email = "Invalid email format";
    }
    if (!data.password.trim()) {
      errors.password = "Password is required";
    }
    return errors;
  };

  const isValidEmail = (email) => {
    // Basic email format validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <motion.div
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="registration-form-container"
    >
      <div className="lock">
        <PiTrademarkRegistered size={65} />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <br />
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
          {errors.fullName && <span className="error">{errors.fullName}</span>}
        </div>
        {/* Add other form fields similar to Full Name */}
        {/* Cover Image, Avatar, Email, Password, Home Address, Contact Number, About */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="Enter your email"
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            placeholder="Enter your password"
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <motion.button
          className="register-submit"
          type="submit"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Register
        </motion.button>
        <br />
        <Link to="/">Already have an account?</Link>
      </form>
    </motion.div>
  );
};

export default RegistrationForm;
