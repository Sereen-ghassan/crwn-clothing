import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
        apiKey: "AIzaSyCwraynqwqz_DhAP8Eh3x14ZF0YbHI4Jlk",
        authDomain: "crwn-clothing-db-71d6a.firebaseapp.com",
        databaseURL: "https://crwn-clothing-db-71d6a.firebaseio.com",
        projectId: "crwn-clothing-db-71d6a",
        storageBucket: "crwn-clothing-db-71d6a.appspot.com",
        messagingSenderId: "714483733345",
        appId: "1:714483733345:web:1127e5fe8320617bf72b20",
        measurementId: "G-5ZW02Q3C0F"
    
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GithubAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;
