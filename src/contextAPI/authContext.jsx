//authentication page using contextAPI

import { createContext, useState, useEffect, useContext} from 'react';
import { auth } from '../firebase/Config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';


export const AuthContextProvider = createContext({
  currentUser: null,
  signUp: () => Promise, //it will return a 'Promise' to perform asynchronouse operations.
  signIn: () => Promise,
  logOut: () => Promise,

})


export const useAuth = () => useContext(AuthContextProvider)

//we will use the authcontext to wrap all of the component.
export default function AuthContext({ children }) {

  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, user => {
          setCurrentUser(user)
      })
      return() => {
          unsubscribe()
      }
  }, [])

   const signUp = (email, password) => { 
      return createUserWithEmailAndPassword(auth, email, password)
  }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
  }

    const logOut = () => {
      return signOut(auth)
  }

  const value = {
    currentUser,
    signUp, 
    signIn,
    logOut,
    
  }

  return <AuthContextProvider.Provider value={value}>
            {children}
        </AuthContextProvider.Provider> 
}
