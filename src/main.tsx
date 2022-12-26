import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import firebase from './lib/firebase.prod'
import { FirebaseContext, UserAuthContextProvider } from './context/firebase'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <UserAuthContextProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </UserAuthContextProvider>
    </React.StrictMode>
)
