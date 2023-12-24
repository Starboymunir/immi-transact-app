"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import authService from '../context/AuthContext';

const Session = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [userLoaded, setUserLoaded] = useState(false);

  useEffect(() => {
    const checkAuthState = async () => {
      try {
        const user = authService.user;
        if (!userLoaded) {
          // If the user has not loaded, return without checking authentication state
          return;
        }

        if (!user && !['/signup', '/joinpage', '/login'].includes(pathname)) {
          router.push('/login');
          console.log(pathname);
        } else {
          setLoading(false);

          if (user) {
            // Only log "User logged in" if the user is not null
            console.log('User logged in:', user.email);
          }
        }
      } catch (error) {
        console.error('Error fetching user:', error.message);
        setLoading(false);
      }
    };

    checkAuthState();

    const unsubscribe = authService.onAuthStateChanged((user) => {
      authService.user = user;
      setUserLoaded(true); // Set userLoaded to true once the user is loaded
      checkAuthState();
    });

    return () => unsubscribe(); // Cleanup the subscription on unmount
  }, [pathname, router, userLoaded]);

  // Display a loading indicator while checking the authentication state
  return loading ? <div>Loading...</div> : <>{children}</>;
};

export default Session;
