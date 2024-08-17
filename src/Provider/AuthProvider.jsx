import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  // register
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth,email, password);
  };
  // login
  const login = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth,email, password);
  };

  //   google login
  const googleLogIn = () => {
    setLoading(true)
    return signInWithPopup(auth,googleProvider);
  };


//   logout
const logout=()=>{
return signOut(auth);
}

  //   handle user

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    login,
    googleLogIn,
    logout,
    loading,
    user
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
