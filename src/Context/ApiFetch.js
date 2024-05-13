import React, { createContext, useState } from 'react';
const ApiFetchContext = createContext();
const ApiFetchProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <ApiFetchContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ApiFetchContext.Provider>
  );
};
export { ApiFetchProvider, ApiFetchContext };
