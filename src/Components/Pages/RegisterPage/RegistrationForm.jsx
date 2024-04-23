import React, { useState } from "react";
import "./Register.css"; // Import your CSS file for styling
import { Link } from "react-router-dom";

import { PiTrademarkRegistered } from "react-icons/pi";
import { motion } from "framer-motion";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    avatar: null,
    coverImage: null,
    email: "",
    password: "",
    homeAddress: "",
    contactNumber: "",
    about: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    // For file inputs, use files[0] to get the first selected file
    setFormData((prevData) => ({ ...prevData, [name]: name === 'avatar' || name === 'coverImage' ? files[0] : value }));
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
          {errors.fullName && <span style={{color:"red"}} className="error">{errors.fullName}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="avatar">Avatar</label>
          <br />
          <input
            type="file"
            id="avatar"
            name="avatar"
            className="registerImage"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="coverImage">Cover Image</label>
          <br />
          <input
            type="file"
            id="coverImage"
            name="coverImage"
            className="registerImage"
            onChange={handleChange}
          />
        </div>

        {/* Add other form fields similar to Full Name */}
        {/* Email, Password, Home Address, Contact Number, About */}

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <span style={{color:"red"}} className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          {errors.password && <span style={{color:"red"}} className="error">{errors.password}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="homeAddress">Home Address</label>
          <br />
          <input
            type="text"
            id="homeAddress"
            name="homeAddress"
            value={formData.homeAddress}
            onChange={handleChange}
            placeholder="Enter your home address"
          />
        </div>

        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number</label>
          <br />
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="Enter your contact number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="about">About</label>
          <br />
          <textarea
            id="about"
            name="about"
            value={formData.about}
            onChange={handleChange}
            placeholder="Write something about yourself"
          ></textarea>
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
        <Link to="/" className="login-link">Already have an account?</Link>
      </form>
    </motion.div>
  );
};

export default RegistrationForm;
