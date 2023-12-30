// utils/getOtherUsername.js
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const getOtherUsername = async (email) => {
  try {
    const db = getFirestore();
    const userDocRef = doc(db, 'User', email);
    const userDocSnap = await getDoc(userDocRef);

    if (userDocSnap.exists()) {
      const userData = userDocSnap.data();
      return userData.username;
    } else {
      return 'Unknown User'; // or handle the case when the user doesn't exist
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    return 'Unknown User'; // or handle the error as needed
  }
};

export default getOtherUsername;
