import { child, get, ref } from "firebase/database";
import React, { useContext, useState, createContext } from "react";
import { database } from "../firebase";

const BooksContext = createContext();

// TODO: sorting - after first release
// get access to the context
export const useBooks = () => {
  return useContext(BooksContext);
};

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [booksTotal, setBooksTotal] = useState(0)

  const getBooks = async () => {
    setLoading(true); 
    try {
      const snapshot = await get(child(ref(database), `books`))
      if (snapshot.exists()) {
        setBooks(snapshot.val());
        setBooksTotal(snapshot.val().length)
      } else {
        console.log("There's an issue with the database. No data available.");
      }    
      setLoading(false);
    }
    catch(error) {
      console.log(error);
      setLoading(false);
    };
  }


  const value = {
    books,
    getBooks,
    booksTotal,
    loadingBooks: loading,
  };
  return (
    <BooksContext.Provider value={value}>
      {children}
    </BooksContext.Provider>
  );
};
