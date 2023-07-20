import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { getFirestore, collection, onSnapshot, addDoc, deleteDoc, doc } from 'firebase/firestore'
import { useEffect } from 'react';
import { useState } from 'react';


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
export default app;
getAnalytics(app);

export const auth = getAuth();
const db = getFirestore(app);

const employeesRef = collection(db, 'employees');

export const register = async (email, password) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        return true;
    } catch (err) {
        console.log(err);
    }
}

export const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        return true;
    } catch (err) {
        console.log(err);
    }
}

export const logOut = async () => {
    try {
        await signOut(auth);
    } catch (err) {
        console.log('Log Out process failed');
    }
}

export const useEmployeeList = () => {
    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        return onSnapshot(employeesRef, (snapshot) => {
            setEmployee(snapshot.docs.map((doc) => {
                const data = doc.data();
                return data
            }))
        })
    }, [])

    return employee;
}

export const addEmployee = async (data) => {

    const uid = auth.currentUser?.uid
    if (!uid) return;
    try {
        await addDoc(employeesRef, {
            ...data
        });

        console.log(uid);
    } catch (err) {
        console.log(err);
    }
}

export const deleteEmployee = (id) => {
    deleteDoc(doc(db, 'employees', id))
}