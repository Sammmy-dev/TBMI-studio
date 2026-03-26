import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAipGazvW0FocKBA7Sk9z1Rrg882rRgfSQ",
  authDomain: "tbmi-studios.firebaseapp.com",
  projectId: "tbmi-studios",
  storageBucket: "tbmi-studios.firebasestorage.app",
  messagingSenderId: "391440287842",
  appId: "1:391440287842:web:0758fc86fb61b01ee0693b"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const storage = getStorage(app)
