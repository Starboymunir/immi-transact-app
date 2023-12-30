// In your utility functions file (e.g., firebaseUtils.js)
import { getDocs, collection, query, where, orderBy } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

export const searchUsers = async (searchTerm) => {
  try {
    const usersRef = collection(db, 'User');
    const q = query(usersRef,
      orderBy('username'),
      where('username', '>=', searchTerm));

    const querySnapshot = await getDocs(q);

    const users = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return users;
  } catch (error) {
    console.error('Error searching users:', error);
    throw error;
  }
};

