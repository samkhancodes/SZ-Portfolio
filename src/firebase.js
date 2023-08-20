import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyCti_W-fI0jnWAm9JQpRez9zbY7XZelUuk',
  authDomain: 'syed-zaidi-portfolio.firebaseapp.com',
  projectId: 'syed-zaidi-portfolio',
  storageBucket: 'syed-zaidi-portfolio.appspot.com',
  messagingSenderId: '780308416993',
  appId: '1:780308416993:web:f2306e11b22317689aaaa0',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth()
const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)

export const signInWithGoogle = () => signInWithPopup(auth, provider)
