import React from 'react'

export interface ImgProps {
    src: string
    alt: string
}

interface Props {
    children: React.ReactNode
    dir?: 'row' | 'col'
}

const Jumbotron = ({ children, dir = 'row' }: Props) => {
    let direction = dir === 'row' ? 'md:flex-row' : 'md:flex-row-reverse'
    return (
        <div className="flex border-b-8 border-b-[#222] pt-12 pr-[5%] text-white overflow-hidden ">
            <div
                className={`flex flex-col items-center justify-between max-w-7xl m-auto w-full  ${direction}`}
            >
                {children}
            </div>
        </div>
    )
}

Jumbotron.Container = ({ children }: Props) => {
    return <div className="last-of-type">{children}</div>
}

Jumbotron.Pane = ({ children }: Props) => {
    // return <div className="w-1/2 lg:w-full lg:pt-0 lg:pr-11 ">{children}</div>
    return <div className="w-1/2 px-0 py-[45px] pane "> {children}</div>
}

Jumbotron.Title = ({ children }: Props) => {
    return (
        <p className="text-3xl leading-[1.1] font-bold mb-2 sm:text-[3.125rem]">
            {children}
        </p>
    )
}

Jumbotron.SubTitle = ({ children }: Props) => {
    return (
        <p className="text-sm sm:font-normal leading-normal sm:text-[1.625rem]">
            {children}
        </p>
    )
}

Jumbotron.Image = ({ src, alt }: ImgProps) => {
    return <img className="max-w-[100%] h-auto" src={src} alt={alt} />
}

export default Jumbotron
