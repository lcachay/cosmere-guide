import { GoogleAuthProvider } from "firebase/auth";
import { ref, update } from "firebase/database";
import React, { useContext, useState, createContext } from "react";
import { provider, auth, signInWithPopup, database, signOut } from "../firebase";

const AuthContext = createContext();

// get access to the context
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    auth.currentUser || JSON.parse(sessionStorage.getItem("user"))
  );
  const [token, setToken] = useState();
  const [loading, setLoading] = useState(false);

  const logout = () => {
    signOut(auth)
      .then(() => {
        sessionStorage.removeItem("user");
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

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;

        usersInDatabase(user);

        sessionStorage.setItem("user", JSON.stringify(user));
        setCurrentUser(user);
        setToken(token);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  };

  const usersInDatabase = ({uid, email, displayName, stsTokenManager, reloadUserInfo}) => {
 
    update(ref(database, 'users/'), {[uid]: {email, displayName, stsTokenManager, createdAt: reloadUserInfo.createdAt, lastLoginAt: reloadUserInfo.lastLoginAt}})
    .then(() => {
      console.log("Users updated")
    })
    .catch((error) => {
      console.log(error)
    });

  }


  const value = {
    currentUser,
    token,
    signInWithGooglePopup,
    logout,
    loading,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
