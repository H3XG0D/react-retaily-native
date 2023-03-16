import { initializeApp } from "firebase/app";
import {firebase} from "@react-native-firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
export const firebaseConfig = {
  apiKey: "AIzaSyDWMsTUt-nc6HxhxOijdac7KPfbSzmoZ6c",
  authDomain: "otp-verification-25baa.firebaseapp.com",
  projectId: "otp-verification-25baa",
  storageBucket: "otp-verification-25baa.appspot.com",
  messagingSenderId: "527815874742",
  appId: "1:527815874742:web:61e20e2d366c0790a9ae17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { firebase };