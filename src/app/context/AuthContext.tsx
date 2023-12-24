"use client"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
  sendEmailVerification,
  onAuthStateChanged as firebaseOnAuthStateChanged, // alias to avoid naming conflict
  User,
} from 'firebase/auth';

import { auth as firebaseAuth } from '../firebaseConfig';

interface ErrorResponse {
  code: string;
  message: string;
}

const authService = {
  user: null as User | null, // initial user state

  createUser: async (email: string, password: string): Promise<UserCredential | null> => {
    try {
      const userCredential: UserCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);

      // Send email verification
      await sendEmailVerification(userCredential.user);

      console.log('User created successfully. Verification email sent to:', userCredential.user?.email);

      // Update user state
      authService.user = userCredential.user;

      return userCredential;
    } catch (error: ErrorResponse | any) {
      if (error.code === 'auth/weak-password') {
        console.error('Weak password');
      } else if (error.code === 'auth/email-already-in-use') {
        console.error('User already exists');
      } else {
        console.error('Error creating user:', error.message);
      }
      return null;
    }
  },

  loginUser: async (email: string, password: string): Promise<UserCredential | null> => {
    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);

      console.log('User logged in successfully:', userCredential.user?.email);

      // Update user state
      authService.user = userCredential.user;

      return userCredential;
    } catch (error: ErrorResponse | any) {
      if (error.code === 'auth/user-not-found') {
        console.error('User not found');
      } else if (error.code === 'auth/wrong-password') {
        console.error('Wrong password');
      } else {
        console.error('Error logging in:', error.message);
      }
      return null;
    }
  },

  signInWithGoogle: async (): Promise<UserCredential | null> => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential: UserCredential = await signInWithPopup(firebaseAuth, provider);

      console.log('User logged in with Google:', userCredential.user?.displayName);

      // Update user state
      authService.user = userCredential.user;

      return userCredential;
    } catch (error: ErrorResponse | any) {
      console.error('Error logging in with Google:', error.message);
      return null;
    }
  },

  resetPassword: async (email: string): Promise<void> => {
    try {
      await sendPasswordResetEmail(firebaseAuth, email);
      console.log(`Password reset email sent to ${email}`);
    } catch (error: ErrorResponse | any) {
      console.error('Error sending password reset email:', error.message);
    }
  },

  signOut: (): void => {
    signOut(firebaseAuth);
    console.log('User signed out');

    // Update user state
    authService.user = null;
  },

  onAuthStateChanged: (callback: (user: User | null) => void): () => void => {
    return firebaseOnAuthStateChanged(firebaseAuth, (user) => {
      authService.user = user;
      callback(user);
    });
  },
};

export default authService;
