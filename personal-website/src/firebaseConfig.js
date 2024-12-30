import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyD1l1TDThVvw0Jg2C3PNdHnkG22b3HeA6I",
  authDomain: "personal-website-1ad43.firebaseapp.com",
  projectId: "personal-website-1ad43",
  storageBucket: "personal-website-1ad43.appspot.com",
  messagingSenderId: "874068185397",
  appId: "1:874068185397:web:916199e5b5d82c6d8cbc7c"
};


const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export { analytics };