// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAjTGhg29A7HeIgxTqVRglI7DM5BEYSQLs',
  authDomain: 'timepark-72288.firebaseapp.com',
  projectId: 'timepark-72288',
  storageBucket: 'timepark-72288.appspot.com',
  messagingSenderId: '650841412167',
  appId: '1:650841412167:web:b4a90177606ae560f2d762',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
