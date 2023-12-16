"use client"
// Import necessary libraries
import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase";

// Create AuthContext
const AuthContext = createContext<any>({});

// Create and export useAuth hook
export const useAuth = () => useContext(AuthContext);

// Create and export AuthContextProvider
export default function AuthContextProvider  ({
  children,
}: {
  children: React.ReactNode;
}){
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);


  

  // Define signup, login, and logout functions
  const signup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    setUser(null);
    await signOut(auth);
  };

  // Return AuthContextProvider with value and loading state check
  return (
    <AuthContext.Provider value={{ user, login, signup, logout, sendEmailVerification }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
