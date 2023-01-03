import React, { useEffect, useState } from 'react'
import useTmdb from '../../hooks/useTmdb'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

interface Props {
    title: string
    fetchURL: string
    keyID: number
}
const Movie = ({ title, pic }: { title: string; pic: string }) => {
    const [like, setLike] = useState(false)
    return (
        <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
            <img
                className="w-full h-auto block"
                src={`https://image.tmdb.org/t/p/w500/${pic}`}
                alt={title}
            />
            <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                    {title}
                </p>
                <p>
                    {like ? (
                        <FaHeart className="absolute top-4 left-4 text-gray-300" />
                    ) : (
                        <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
                    )}
                </p>
            </div>
        </div>
    )
}

const Row = ({ title, fetchURL, keyID }: Props) => {
    const { data } = useTmdb(fetchURL)
    const slideLeft = () => {
        var slider = document.getElementById('slider' + keyID)
        slider!.scrollLeft = slider!.scrollLeft - 500
    }
    const slideRight = () => {
        var slider = document.getElementById('slider' + keyID)
        slider!.scrollLeft = slider!.scrollLeft + 500
    }
    return (
        <>
            <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
            <div className="relative flex items-center group ">
                <MdChevronLeft
                    onClick={slideLeft}
                    size={40}
                    className=" bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block left-0"
                />
                <div
                    id={'slider' + keyID}
                    className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth no-scrollbar relative">
                    {data.map((item, id) => (
                        <Movie
                            key={id}
                            title={item.title}
                            pic={item?.backdrop_path}
                        />
                    ))}
                </div>
                <MdChevronRight
                    onClick={slideRight}
                    size={40}
                    className=" bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0"
                />
            </div>
        </>
    )
}

export default Row
