/* eslint-disable react/prop-types */
import { createContext, useEffect, useState} from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  FacebookAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import auth from "./firebase.config";
export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)


    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password )
        
    }


    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }



    const googleProvider = new GoogleAuthProvider();

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }


    const facebookProvider = new FacebookAuthProvider();
    const facebookLogin = () => {
        return signInWithPopup(auth, facebookProvider)
    }

    const logOut = () => {
        return signOut(auth)
    }


    const authInfo = {
      user,
      setUser,
      registerUser,
      loginUser,
      googleLogin,
      facebookLogin,
      logOut,
    };




    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
          if (currentUser) {
            setUser(currentUser)
            console.log(currentUser)
        
          } else {
            setUser(null)
          }
        });
        return ()=> {
            unSubscribe()
        }
    },[])



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;