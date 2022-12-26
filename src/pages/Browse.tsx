import React from 'react'
import { useUserAuth } from '../context/firebase'

const Browse = () => {
    let { user } = useUserAuth()
    user.reload()
    console.log(user)

    return (
        <>
            <h1 className="text-white">{user.displayName}</h1>
            <h1 className="text-white">{user.email}</h1>
            <h1 className="text-white">{user.photoURL}</h1>
        </>
    )
}

export default Browse
