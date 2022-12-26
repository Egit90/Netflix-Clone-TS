import 'firebase/firestore'
import 'firebase/auth'
import { seedDatabase } from '../seed'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

console.log(import.meta.env)

const config = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId,
}

const app = initializeApp(config)

export const auth = getAuth(app)
// seedDatabase(firebase)

export default app
