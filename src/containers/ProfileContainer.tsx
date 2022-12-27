import React from 'react'
import * as ROUTES from '../constants/routes'
import { Header, Profiles } from '../components'
import { User } from 'firebase/auth'
import { Profile } from './BrowseContainer'

interface Props {
    user: User | null | undefined
    setProfile: React.Dispatch<React.SetStateAction<Profile>>
}

const ProfileContainer = ({ user, setProfile }: Props) => {
    const profileSetter = () => {
        setProfile({
            displayName: user?.displayName,
            photoURL: user?.photoURL,
        })
    }
    return (
        <>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo to={ROUTES.HOME} img="./logo.svg" alt="logo" />
                </Header.Frame>
            </Header>
            <Profiles>
                <Profiles.Title>Who's watching?</Profiles.Title>
                <Profiles.List>
                    <Profiles.User onClick={profileSetter}>
                        <Profiles.Picture
                            src={`${user?.photoURL}`}
                        ></Profiles.Picture>
                        <Profiles.Name>{user?.displayName}</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>
        </>
    )
}

export default ProfileContainer
