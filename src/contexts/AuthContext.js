import { GoogleAuthProvider } from "firebase/auth";
import { ref, update } from "firebase/database";
import React, { useContext, useState, createContext, useEffect } from "react";
import { provider, auth, signInWithPopup, database, signOut } from "../firebase";
import { useUser } from "./UserContext";

const AuthContext = createContext();

// get access to the context
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const {setCurrentUser} = useUser();
  const [token, setToken] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setCurrentUser(auth.currentUser || JSON.parse(localStorage.getItem("user")))
  }, [])

  const logout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("user");
        setCurrentUser();
        setToken();
        return true;
      })
      .catch((error) => {
        setCurrentUser();
        setToken();
        console.log("Logout with error: ", error);
        return error;
      });
  };

  const signInWithGooglePopup = async () => {
    setLoading(true);

    try{
      const result = await signInWithPopup(auth, provider)

      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      await usersInDatabase(user);

      localStorage.setItem("user", JSON.stringify(user));
      setCurrentUser(user);
      setToken(token);
      setLoading(false);
        

    } catch(error) {
      console.log(error);
      setLoading(false);
    }
  };

  const usersInDatabase = async ({uid, email, displayName, stsTokenManager, reloadUserInfo}) => {
    try{
      await update(ref(database, `users/${uid}`), {auth: {email, displayName, stsTokenManager, createdAt: reloadUserInfo.createdAt, lastLoginAt: reloadUserInfo.lastLoginAt}})
    } catch(error) {
      console.log(error)
    }
  }


  const value = {
    token,
    signInWithGooglePopup,
    logout,
    loadingAuth: loading,
  };
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
