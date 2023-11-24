/* eslint-disable react/prop-types */
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const UpdateProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     // const userEmail = currentUser?.email || user?.email;
  //     // const loggedUser = { email: userEmail };
  //     setUser(currentUser);
  //     console.log("current user", currentUser);
  //     setLoading(false);
  //     // if user exists then issue a token
  //     // if (currentUser) {
  //     //   axios
  //     //     .post("https://server-site-theta-two.vercel.app/jwt", loggedUser, {
  //     //       withCredentials: true,
  //     //     })
  //     //     .then((res) => {
  //     //       console.log("token response", res.data);
  //     //     });
  //     // } else {
  //     //   axios
  //     //     .post("https://server-site-theta-two.vercel.app/logout", loggedUser, {
  //     //       withCredentials: true,
  //     //     })
  //     //     .then((res) => {
  //     //       console.log(res.data);
  //     //     });
  //     // }
  //   });
  //   return () => {
  //     return unsubscribe();
  //   };
  // }, []);
  useEffect(() => {
    const unSubcribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
        setLoading(false)

    });
    return () => {
        unSubcribe()

    }
}, []);

  const authInfo = {
    user,
    loading,
    createUser,
    logInUser,
    signInWithGoogle,
    logOut,
    UpdateProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
