import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { getFirestore, collection, addDoc, deleteDoc, doc, getDocs } from 'firebase/firestore'
import { useEffect } from 'react';
import { useState } from 'react';
import { store } from './store/store'
import { useSelector } from 'react-redux';
import { login as loginHandler } from './store/authSlicer'


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

// Authentication

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
        const user = await signInWithEmailAndPassword(auth, email, password);
        console.log(user);
        return user;
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

onAuthStateChanged(auth, (user) => {
    if (user) {
        store.dispatch(loginHandler(user));
        // console.log(user);
    }
})

// Firestore 

const uid =  auth.currentUser?.uid
console.log(uid);

export const useEmployeeList = () => {
    const [employee, setEmployee] = useState([]);
    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                console.log(user);
                setEmployee(await fetchDataFromFiretore(user.uid))
            } else {
                setEmployee(null);
            }
        })
    }, [])
    return employee;
}

const fetchDataFromFiretore = async (uid) => {
    try {
        const doc = await getDocs(employeesRef);
        const empData = [];
        doc.forEach((emp) => {
            emp.data().uid == uid ? empData.push({ id: emp.id, ...emp.data() }) : null;
        })
        return empData;
    } catch (err) {
        console.log(err);
    }
}

export const addEmployee = async () => {
    const uidd = auth.currentUser?.uid

    if (!uidd) return;
    try {
        const doc = await addDoc(employeesRef, {
            uid: uidd,
            name: 'Ayla',
            email: 'aylamammadova@mail.ru',
            address: 'Baku, Lokbatan',
            phone: '(+994)557604082',
        });

        console.log(doc.id);
    } catch (err) {
        console.log(err);
    }
}

export const deleteEmployee = (id) => {
    deleteDoc(doc(db, 'employees', id))
}