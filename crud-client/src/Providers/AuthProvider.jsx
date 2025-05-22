import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import auth from '../firebase.init'
 export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const createUser=(email,password)=>{
         setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //login
    const signInUser=(email,password)=>{
         setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    //signout
    const signoutUser=()=>{
        setLoading(true)
        return signOut(auth)
    }
    //observer.store the informaiton of user

    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth,currentUser=>{
     
            console.log('curent user')
            setUser(currentUser)
            setLoading(false)
        
        

    })
    return ()=>{
        unSubscribe() //cleanup,unmount
    }
    },[])

    //pass value to context
    const authInfo={
     
        user,
        loading,
      createUser,
       signInUser,
       signoutUser
    }
  return (
    <div>
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
      
    </div>
  )
}

export default AuthProvider
