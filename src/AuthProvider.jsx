/* eslint-disable react/prop-types */
import { createContext} from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "./firebase.config";
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {



    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password )
        .then(result => console.log(result.user))
        .catch(error => console.log(error))
    }

    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result=> console.log(result.user))
        .catch(error=> console.log(error))
    }

    const authInfo = { registerUser, loginUser };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;