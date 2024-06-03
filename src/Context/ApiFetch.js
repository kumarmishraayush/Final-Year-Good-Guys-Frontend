import React, { createContext, useState,  } from 'react';
import axios from 'axios';

const ApiFetchContext = createContext();

const ApiFetchProvider = ({ children }) => {
  const [LoginUserInfo, setLoginUserInfo] = useState({});
  const [accessToken, setAccessToken] = useState();
  const [userPosts, setUserPosts] = useState([]);


  const FetchAndLogin = async (formData) => {
    try {
      const response = await axios.post('http://localhost:8000/api/v1/users/login', {
        email: formData.email,
        password: formData.password,
      });

      setLoginUserInfo(response.data.data);
      setAccessToken(response.data.data.accessToken);
      alert(`Login successful: ${response.data.data.user.fullName}`);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert('Invalid credentials. Please check your email and password.');
      } else {
        console.error('Error during login:', error); // Log the error
        alert('User not existed, please try again.');
      }
    }
  };

  return (
    <ApiFetchContext.Provider value={{
      LoginUserInfo,
      setLoginUserInfo,
      FetchAndLogin,
      accessToken,
      setAccessToken,
      userPosts,
      setUserPosts
    }}>
      {children}
    </ApiFetchContext.Provider>
  );
};

export { ApiFetchProvider, ApiFetchContext };
