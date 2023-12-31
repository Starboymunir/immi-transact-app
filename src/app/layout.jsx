"use client"
// import { Inter } from 'next/font/google'; // This line is commented out in the original code

import './globals.css';
import './components/styles/buttons.css';
import './components/styles/hero-section.css';
import HomePage from './page';
import Head from 'next/head';
import Heade from './components/head';
import AuthService from './context/AuthContext';
import Session from './components/Session';
import { useEffect } from 'react';
import 'firebase/firestore';
import { firebaseConfig } from './firebaseConfig';
import { initializeApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// const inter = Inter({ subsets: ['latin'] }); // This line is commented out in the original code

/* export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}; */

export default function RootLayout({ children }) {
  useEffect(() => {
    // Initialize Firebase
    if (!getApps().length) {
      firebase.initializeApp(firebaseConfig);
    }
  }, []);

  return (
    <html lang="en">
      <body>
         <Session>
          <Heade />
          {/* <HeroSection className="" />
        <IconWrapper /> */}
          {/* <Reviews property1="" className="" /> */}
          {children}
        </Session>
      </body>
    </html>
  );
}
