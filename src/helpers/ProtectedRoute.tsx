import React from 'react'
import { Navigate } from 'react-router-dom'
import { useUserAuth } from '../context/firebase'

interface Children {
    children: React.ReactNode
}

const ProtectedRoute = ({ children }: Children) => {
    let { user } = useUserAuth()
    if (!user) return <Navigate to={'/'} />
    return <>{children}</>
}

export default ProtectedRoute
