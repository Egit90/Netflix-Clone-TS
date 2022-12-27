import React, { useEffect, useState } from 'react'
import { Movie } from '../hooks/useTmdb'
import ProfileContainer from './ProfileContainer'
import { useUserAuth } from '../context/firebase'
import { Loading } from '../components'

interface Props {
    popular: Movie[]
}

export interface Profile {
    displayName: string | null | undefined
    photoURL: string | null | undefined
}

const BrowseContainer = ({ popular }: Props) => {
    const [profile, setProfile] = useState({} as Profile)
    const [loading, setLoading] = useState(true)
    const { user } = useUserAuth()
    //
    useEffect(() => {
        console.log('profile', profile)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [profile.displayName])

    return profile.displayName ? (
        loading ? (
            <Loading src={`${user?.photoURL}`} />
        ) : (
            <div>Hi</div>
        )
    ) : (
        <ProfileContainer user={user} setProfile={setProfile} />
    )
}

export default BrowseContainer
