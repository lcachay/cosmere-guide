import { child, get, ref } from "firebase/database";
import React, { useContext, useState, createContext } from "react";
import { database } from "../firebase";

const BooksContext = createContext();

// get access to the context
export const useBooks = () => {
  return useContext(BooksContext);
};

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const getBooks = async () => {
    setLoading(true); 
    get(child(ref(database), `books`)).then((snapshot) => {
      if (snapshot.exists()) {
        setBooks(snapshot.val());
      } else {
        console.log("There's an issue with the database. No data available.");
      }    
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    });
  }


  const value = {
    books,
    getBooks,
    loadingBooks: loading,
  };
  return (
    <BooksContext.Provider value={value}>
      {children}
    </BooksContext.Provider>
  );
};
