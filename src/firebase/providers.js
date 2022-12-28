import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async() =>{


    try {

    const result = await signInWithPopup(FirebaseAuth, googleProvider);
   const {displayName, email, photoURL, uid} = result.user;

localStorage.setItem('name', displayName)
localStorage.setItem('profilePic', photoURL)


    return{
        ok: true,

        displayName,
        email,
        photoURL,
        uid
    }
   

   
        
    
} catch (error) {
    

    const errorCode = error.code();
const errorMessage = error.message();

    return{
        ok: false,
        errorMessage,

    }
}
}
export const logoutFirebase = async() =>{
    return await FirebaseAuth.signOut();
}