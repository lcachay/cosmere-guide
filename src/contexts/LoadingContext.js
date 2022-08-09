import React, { useContext, useState, createContext, useEffect } from "react";

const LoadingContext = createContext();

export const useLoading = () => {
  return useContext(LoadingContext);
};

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(loading)
  }, [loading]);

  const value = {
    loading,
    setLoading,
  };
  return (
    <LoadingContext.Provider value={value}>
      {children}
    </LoadingContext.Provider>
  );
};
