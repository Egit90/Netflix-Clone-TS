import React, { useEffect, useState } from 'react'
import { Movie } from '../hooks/useTmdb'
import ProfileContainer from './ProfileContainer'
import { useUserAuth } from '../context/firebase'
import { Header, Loading } from '../components'
import { ReleaseBody } from '../components/loading/Loading'

interface Props {
    popular: Movie[]
    header: Movie
}

export interface Profile {
    displayName: string | null | undefined
    photoURL: string | null | undefined
}

const BrowseContainer = ({ popular, header }: Props) => {
    const [dropDownVisible, setDropDownVisible] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [profile, setProfile] = useState({} as Profile)
    const [loading, setLoading] = useState(true)
    const { user, signOutFirebase } = useUserAuth()
    let headerSrc = `https://image.tmdb.org/t/p/original/${
        header && header.backdrop_path
    }`
    useEffect(() => {
        console.log('profile', profile)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [profile.displayName])

    const signOut = async () => {
        try {
            await signOutFirebase()
        } catch (error) {
            alert(error.message)
        }
    }

    return profile.displayName ? (
        <>
            {loading ? <Loading src={`${user?.photoURL}`} /> : <ReleaseBody />}
            <Header.HeaderForBrowse definite={false} src={headerSrc}>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo img="logo.svg" alt="logo" to="/browse" />
                        <Header.TextLink>Series</Header.TextLink>
                        <Header.TextLink>Films</Header.TextLink>
                    </Header.Group>
                    <Header.Group>
                        <Header.Search
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                        />
                        <Header.Profile
                            onMouseEnter={() => {
                                setDropDownVisible(true)
                            }}
                            onMouseLeave={() => {
                                setTimeout(() => {
                                    setDropDownVisible(false)
                                }, 1200)
                            }}
                        >
                            <Header.Picture
                                src={`/images/users/${user?.photoURL}.png`}
                            />
                        </Header.Profile>
                        {dropDownVisible && (
                            <Header.DropDown>
                                <Header.Group>
                                    <Header.Picture
                                        src={`/images/users/${user?.photoURL}.png`}
                                    />
                                    <Header.TextLink>
                                        {user?.displayName}
                                    </Header.TextLink>
                                </Header.Group>
                                <Header.Group>
                                    <Header.TextLink onClick={signOut}>
                                        Sign Out
                                    </Header.TextLink>
                                </Header.Group>
                            </Header.DropDown>
                        )}
                    </Header.Group>
                </Header.Frame>
                <Header.Feature>
                    <Header.FeatureCallOut>
                        {header.title}
                    </Header.FeatureCallOut>
                    <Header.Text>{header.overview}</Header.Text>
                    <Header.PlayButton>Play</Header.PlayButton>
                </Header.Feature>
            </Header.HeaderForBrowse>
        </>
    ) : (
        <ProfileContainer user={user} setProfile={setProfile} />
    )
}

export default BrowseContainer
