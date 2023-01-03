import axios from 'axios'
import { useEffect, useState } from 'react'

export interface Movie {
    adult: boolean
    backdrop_path: string
    genre_ids: Array<number>
    id: number
    media_type: string
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
    name: string
}

const useTmdb = (url: string) => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState<Array<Movie>>([])
    const [error, setError] = useState('')
    const fetchData = async () => {
        try {
            const resp = await axios.get(url)
            const data = await resp?.data.results
            setData(data)
            setIsLoading(false)
        } catch (error) {
            setError(error.message)
            setIsLoading(false)
        }
    }
    useEffect(() => {
        console.log('hook')
        setIsLoading(true)
        fetchData()
    }, [url])

    // let movie = data[Math.floor(Math.random() * data.length)]

    return { isLoading, data, error }
}
export default useTmdb
