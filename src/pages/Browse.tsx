import React from 'react'
import { useUserAuth } from '../context/firebase'
import { useNavigate } from 'react-router-dom'
import useTmdb from '../hooks/useTmdb'
import url from '../fixtures/tmdb.json'
import BrowseContainer from '../containers/BrowseContainer'
import { Movie } from '../hooks/useTmdb'
const Browse = () => {
    // let urlSting = `${url.getTrending.movies.url}`.replace(
    //     '<<api_key>>',
    //     import.meta.env.VITE_TMDB
    // )
    // const { data, error, isLoading } = useTmdb(urlSting)
    let data: Movie[] = []

    return (
        <>
            {/* <button onClick={l}>SignOut</button>
            <h1 className="text-white">{user?.displayName}</h1>
            <h1 className="text-white">{user?.email}</h1>
            <h1 className="text-white">{user?.photoURL}</h1>
            {data.length > 0 && (
                <img
                    src={`https://image.tmdb.org/t/p/original/${
                        movie && movie.backdrop_path
                    }`}
                    alt="test"
                />
            )} */}
            <BrowseContainer popular={data} />
        </>
    )
}

export default Browse
