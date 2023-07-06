import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "@firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBCvwUbbIW7uKEYUIMgLyZZOiQMPI8rKtw",
  authDomain: "minute-prints.firebaseapp.com",
  projectId: "minute-prints",
  storageBucket: "minute-prints.appspot.com",
  messagingSenderId: "612027663649",
  appId: "1:612027663649:web:005a76af6c049d40036a60",
  measurementId: "G-TXRQ1548X2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);