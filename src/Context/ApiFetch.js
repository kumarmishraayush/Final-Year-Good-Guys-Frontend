import React, { createContext, useState } from 'react';
const ApiFetchContext = createContext();
import axios from 'axios';
const ApiFetchProvider = ({ children }) => {
  const [LoginUserInfo, setLoginUserInfo] = useState();
  
  const FetchAndLogin = () => {
    axios
      .get('https://api.github.com/users')
      .then((response) => {
        setLoginUserInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  
  
  return (
    <ApiFetchContext.Provider value={{ LoginUserInfo, FetchAndLogin }}>
      {children}
    </ApiFetchContext.Provider>
  );
};
export { ApiFetchProvider, ApiFetchContext };
