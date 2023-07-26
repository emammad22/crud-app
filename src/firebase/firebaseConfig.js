import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCbvazpupBNHDq9G04iN8LcJKXj__9xV3E",
    authDomain: "crud-app-7d042.firebaseapp.com",
    projectId: "crud-app-7d042",
    storageBucket: "crud-app-7d042.appspot.com",
    messagingSenderId: "488104292704",
    appId: "1:488104292704:web:f7418b18aeb4f25cbcee05",
    measurementId: "G-HDMXBEWJC6"
}

const app = initializeApp(firebaseConfig);
getAnalytics(app);

export default app;
export const auth = getAuth();
