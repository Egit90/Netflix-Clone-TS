import React, { Children } from 'react'
import { Navigate } from 'react-router-dom'
import { useUserAuth } from '../context/firebase'
import { Browse } from '../pages'

interface Children {
    children: React.ReactNode
}

const ProtectedRoute = ({ children }: Children) => {
    let { user } = useUserAuth()
    if (!user) return <Navigate to={'/'} />
    return <>{children}</>
}

const IfLoggedInGoToBrowse = ({ children }: Children) => {
    let { user } = useUserAuth()
    if (user) return <Browse />
    return <>{children}</>
}

export default ProtectedRoute
export { IfLoggedInGoToBrowse }
