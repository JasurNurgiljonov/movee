
import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyDNYtfqskXPWhdtVrG-coDPUOKZ7Z0IjLA",
  authDomain: "video-streaming-2022.firebaseapp.com",
  projectId: "video-streaming-2022",
  storageBucket: "video-streaming-2022.appspot.com",
  messagingSenderId: "684455683918",
  appId: "1:684455683918:web:6cc1c42bce4aeb72fba01f"
};

const firebase = Firebase.initializeApp(config);


export { firebase };
