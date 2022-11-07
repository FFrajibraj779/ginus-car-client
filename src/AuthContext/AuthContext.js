import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase.config.js/Firebase';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'


export const UserContext = createContext();
const auth = getAuth(app)

const AuthContext = ({children}) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);
const googleProvider = new GoogleAuthProvider()
const Register = (email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword (auth, email, password)

}
const Login = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
} 
const googleLogin =()=>{

    return signInWithPopup(auth, googleProvider)
}
const logOut = ()=>{
    localStorage.removeItem('token');
    return signOut(auth)
}
useEffect(()=>{
   const unSubscribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser)
        setLoading(false)
    })
    return ()=>{
        unSubscribe();
    }
},[])
const authInfo ={user, loading, Register, Login,googleLogin, logOut}


    return (
      <UserContext.Provider value={authInfo}>
          {children}
      </UserContext.Provider>
    );
};

export default AuthContext;