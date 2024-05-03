import { createContext, useState, useContext, useEffect } from "react";

// Create a context
const UserTypeContext = createContext(null);

// Custom hook to use UserTypeContext
export const useUserType = () => {
  return useContext(UserTypeContext);
};

// Provider component
export const UserTypeProvider = ({ children }) => {
  const [userType, setUserType] = useState(() => {
    // Initialize userType from localStorage, defaulting to null if not found
    return localStorage.getItem("userType") || "asif";
  });

  // Function to set user type
  const setUser = (type) => {
    setUserType(type);
    localStorage.setItem("userType", type); // Update localStorage
  };

  // Function to get user type
  const getUser = () => {
    return userType;
  };

  // Function to logout user
  const logout = () => {
    setUserType(null);
    localStorage.removeItem("userType"); // Remove userType from localStorage
  };

  // Value to be provided by the context
  const value = {
    setUser,
    getUser,
    logout,
  };

  return (
    <UserTypeContext.Provider value={value}>
      {children}
    </UserTypeContext.Provider>
  );
};
