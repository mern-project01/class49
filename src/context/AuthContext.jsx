import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import app from "../componets/firebase/firebase.config";

export const UserContext = createContext({});
const auth = getAuth(app);

const AuthContext = ({ children }) => {
  const [user, setUser] = useState({});
  // creatUser for resitation
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // create login
  const createLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //for using user information
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("curent user info", currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  // signout mathode

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  //userIfo is used for context
  const userInfo = {
    name: "bangali",
    createUser,
    createLogin,
    user,
    logOut,
  };
  return (
    <UserContext.Provider value={userInfo}>{children} </UserContext.Provider>
  );
};

export default AuthContext;
