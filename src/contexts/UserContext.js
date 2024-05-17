import { child, get, ref, remove, update } from "firebase/database";
import React, { useContext, useState, createContext, useEffect } from "react";
import { database } from "../firebase";
import { useLoading } from "./LoadingContext";
import { useBooks } from "./BooksContext";

const UserContext = createContext();

// get access to the context
export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const {setLoading} = useLoading();
  const {booksTotal} = useBooks();
  const [progress, setProgress] = useState(0);
  const [currentUser, setCurrentUser] = useState();
  const [booksInProgress, setBooksInProgress] = useState([]);
  const [booksCompleted, setBooksCompleted] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await get(child(ref(database), `users/${currentUser.uid}/readingStatus`))
        const inProgress = [];
        const completed = [];

        if (snapshot.exists()) {
          const data = snapshot.val()
          for (const key in data) {
            if(data[key] === 'Completed'){
              completed.push(key)
            } else {
              inProgress.push(key)
            }
          }
          setBooksInProgress(inProgress);
          setBooksCompleted(completed);
          setProgress((completed.length * 100) / booksTotal)
        }   
        setLoading(false);
      }
      catch(error) {
        console.log(error);
        setLoading(false);
      };
    }
    if(currentUser && booksTotal){
      fetchData();
    }
  }, [currentUser, booksTotal])
  

  const markAsReading = async (bookTitle) => {
    setLoading(true);
    try {
      await update(ref(database, `users/${currentUser.uid}/readingStatus`), {[bookTitle]: 'Reading'})   
      setBooksCompleted(prev => prev.filter(book => book !== bookTitle))
      setBooksInProgress([...booksInProgress, bookTitle])
      setLoading(false);
    }
    catch(error) {
      console.log(error);
      setLoading(false);
    };
  }

  const markAsRead = async (bookTitle) => {
    setLoading(true);
    try {
      await update(ref(database, `users/${currentUser.uid}/readingStatus`), {[bookTitle]: 'Completed'})   
      setBooksInProgress(prev => prev.filter(book => book !== bookTitle))
      setBooksCompleted([...booksCompleted, bookTitle])
      setLoading(false);
    }
    catch(error) {
      console.log(error);
      setLoading(false);
    };
    setProgress(prev => ++prev)
  }

  const markAsUnread = async (bookTitle) => {
    setLoading(true);
    try {
      await remove(child(ref(database), `users/${currentUser.uid}/readingStatus/${bookTitle}`))  
      setBooksCompleted(prev => prev.filter(book => book !== bookTitle))
      setBooksInProgress(prev => prev.filter(book => book !== bookTitle))
      setLoading(false);
    }
    catch(error) {
      console.log(error);
      setLoading(false);
    };
    setProgress(prev => prev--)
  }

  const value = {
    currentUser,
    setCurrentUser,
    markAsRead,
    markAsReading,
    markAsUnread,
    progress,
    booksInProgress,
    booksCompleted
  };
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
