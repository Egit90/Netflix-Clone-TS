import React, { createContext, useEffect, useState } from 'react'
import useTmdb, { Movie } from '../hooks/useTmdb'
import url from '../fixtures/tmdb.json'
import BrowseContainer from '../containers/BrowseContainer'

interface Ctx {
    active: string
    setActive: React.Dispatch<React.SetStateAction<string>>
}
export const activeContext = createContext({} as Ctx)

const Browse = () => {
    // const [active, setActive] = useState('Films')
    // const [movie, setMovie] = useState({} as Movie)

    // let urlSting =
    //     active === 'Films'
    //         ? `${url.getTrending.Films.url}`.replace(
    //               '<<api_key>>',
    //               import.meta.env.VITE_TMDB
    //           )
    //         : `${url.getTrending.Series.url}`.replace(
    //               '<<api_key>>',
    //               import.meta.env.VITE_TMDB
    //           )

    let urlSting = `${url.getTrending.all.url}`.replace(
        '<<api_key>>',
        import.meta.env.VITE_TMDB
    )

    const { data, error, isLoading } = useTmdb(urlSting)

    // let movie = chunk && chunk[Math.floor(Math.random() * data.length)]

    if (isLoading) {
        return <p className="text-white">Loading...</p>
    } else if (data.length > 0) {
        return (
            <>
                {/* <activeContext.Provider value={{ active, setActive }}> */}
                <BrowseContainer data={data} />
                {/* </activeContext.Provider> */}
            </>
        )
    } else {
        return <p className="text-white">Cant Fetch Data</p>
    }
}

export default Browse
