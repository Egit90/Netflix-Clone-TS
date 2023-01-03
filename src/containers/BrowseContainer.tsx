import React, { createContext, useContext, useEffect, useState } from 'react'
import { Movie } from '../hooks/useTmdb'
import ProfileContainer from './ProfileContainer'
import { useUserAuth } from '../context/firebase'
import { Header, Loading, Row } from '../components'
import { ReleaseBody } from '../components/loading/Loading'
import { Card } from '../components/'
// import { activeContext } from '../pages/Browse'
import requests from '../fixtures/Requests'

interface Props {
    data: Movie[]
}

export interface Profile {
    displayName: string | null | undefined
    photoURL: string | null | undefined
}

interface Ctx {
    active: string
    setActive: React.Dispatch<React.SetStateAction<string>>
}
export const activeContext = createContext({} as Ctx)

const BrowseContainer = ({ data }: Props) => {
    const [active, setActive] = useState('Films')
    const [movie, setMovie] = useState({} as Movie)
    const [dropDownVisible, setDropDownVisible] = useState(false)
    const [profile, setProfile] = useState({} as Profile)
    const [loading, setLoading] = useState(true)
    const [slidesState, setSlidesState] = useState([] as Movie[])
    const { user } = useUserAuth()

    useEffect(() => {
        if (active === 'Films') {
            setSlidesState(data.filter((e) => e.media_type === 'movie'))
            setMovie(
                slidesState[Math.floor(Math.random() * slidesState.length)]
            )
        } else if (active === 'Series') {
            setSlidesState(data.filter((e) => e.media_type === 'tv'))
            setMovie(
                slidesState[Math.floor(Math.random() * slidesState.length)]
            )
            console.log('active', active)
            console.log('tv Slides', slidesState)
        }
    }, [data, active])

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('500', slidesState)

            setMovie(
                slidesState[Math.floor(Math.random() * slidesState.length)]
            )
        }, 5000)

        return () => clearInterval(intervalId)
    }, [slidesState])

    let headerSrc = `https://image.tmdb.org/t/p/original/${
        movie && movie.backdrop_path
    }`
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [profile.displayName])

    return profile.displayName ? (
        <>
            <activeContext.Provider value={{ active, setActive }}>
                {loading ? (
                    <Loading src={`${user?.photoURL}`} />
                ) : (
                    <ReleaseBody />
                )}
                <Header.HeaderForBrowse definite={false} src={headerSrc}>
                    <Header.Frame>
                        <Header.Group>
                            <Header.Logo
                                img="logo.svg"
                                alt="logo"
                                to="/browse"
                            />
                            <Header.TextLink title="Series" action="active" />
                            <Header.TextLink title="Films" action="active" />
                        </Header.Group>
                        <Header.Group>
                            <Header.Search />
                            <Header.Profile
                                onMouseEnter={() => {
                                    setDropDownVisible(true)
                                }}
                                onMouseLeave={() => {
                                    setTimeout(() => {
                                        setDropDownVisible(false)
                                    }, 1200)
                                }}>
                                <Header.Picture src={`${user?.photoURL}`} />
                            </Header.Profile>
                            <Header.DropDown visible={dropDownVisible}>
                                <Header.Group>
                                    <Header.Picture src={`${user?.photoURL}`} />
                                    <Header.TextLink
                                        title="display"
                                        action="display"
                                    />
                                </Header.Group>
                                <Header.Group>
                                    <Header.TextLink
                                        title="signOut"
                                        action="signOut"
                                    />
                                </Header.Group>
                            </Header.DropDown>
                        </Header.Group>
                    </Header.Frame>
                    <Header.Feature>
                        <Header.FeatureCallOut>
                            {movie && movie.title === undefined
                                ? movie.name
                                : movie.title}
                        </Header.FeatureCallOut>
                        <Header.Text>{movie.overview}</Header.Text>
                        <Header.PlayButton>Play</Header.PlayButton>
                    </Header.Feature>
                </Header.HeaderForBrowse>
                {requests.map((cat) => (
                    <Row
                        key={cat.key}
                        keyID={cat.key}
                        title={cat.title}
                        fetchURL={cat.url}
                    />
                ))}
            </activeContext.Provider>
        </>
    ) : (
        <ProfileContainer user={user} setProfile={setProfile} />
    )
}

export default BrowseContainer
