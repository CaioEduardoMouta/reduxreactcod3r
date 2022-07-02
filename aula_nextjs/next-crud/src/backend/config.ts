import firebase from "firebase";
import 'firebase/firestore'

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyAvf3dkfQ7GmPaaZRuXqpj0xA6K3I2TM_g",
        authDomain: "next-crud-48414.firebaseapp.com",
        projectId: "next-crud-48414",
    })
}

export default firebase