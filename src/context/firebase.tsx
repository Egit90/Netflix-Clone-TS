import React, {
    Context,
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react'
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    User,
    UserCredential,
    updateProfile,
} from 'firebase/auth'
import { auth } from '../lib/firebase.prod'

interface Children {
    children: React.ReactNode
}

type Ctx = {
    user: User | null | undefined
    signUp: (email: string, password: string) => Promise<UserCredential>
    login: (email: string, password: string) => Promise<UserCredential>
    updatePictureAndName: (user: User, firstName: string) => Promise<void>
    signOutFirebase: () => Promise<void>
}

//
export const FirebaseContext = createContext<Ctx>({} as Ctx)

export const UserAuthContextProvider = ({ children }: Children) => {
    const [user, setUser] = useState<User | null | undefined>()

    //
    const signUp = async (email: string, password: string) => {
        return await createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email: string, password: string) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutFirebase = () => {
        return signOut(auth)
    }

    const updatePictureAndName = async (user: User, firstName: string) => {
        await updateProfile(user, {
            displayName: firstName,
            photoURL: `${Math.floor(Math.random() * 5) + 1}`,
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => unsubscribe()
    }, [])

    return (
        <FirebaseContext.Provider
            value={{
                user,
                signUp,
                login,
                updatePictureAndName,
                signOutFirebase,
            }}
        >
            {children}
        </FirebaseContext.Provider>
    )
}

export const useUserAuth = () => {
    return useContext(FirebaseContext)
}
