import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
    children: React.ReactNode
    bg?: boolean
    src?: string
}

const Header = ({ children, src, bg = true }: Props) => {
    let backGround = src
        ? `bg-[url('${src}')]`
        : "bg-[url('/images/misc/home-bg.jpg')]"
    return bg ? (
        <div
            className={`flex flex-col ${backGround} bg-left-top bg-cover bg-no-repeat`}
        >
            {children}
        </div>
    ) : (
        <>{children}</>
    )
}

Header.Frame = ({ children }: Props) => {
    return (
        <div className="flex my-0 mx-14 h-28 px-4 py-0 justify-between items-center whitespace-nowrap float-none">
            {children}
        </div>
    )
}

Header.Button = ({ to, text }: { to: string; text: string }) => {
    return (
        <Link
            to={to}
            className="block bg-[#e50914] w-20 h-fit mx-0 mr-8 text-white border-none text-[16px] leading-normal text-start rounded-sm py-2 px-4 cursor-pointer box-border hover:bg-[#f40612] "
        >
            {text}
        </Link>
    )
}

Header.Logo = ({ to, img, alt }: { to: string; img: string; alt: string }) => {
    return (
        <Link to={to}>
            <img
                src={img}
                alt={alt}
                className="h-6 w-24 sm:h-8 sm:w-28 lg:h-9 lg:w-36 xl:h-11 xl:w-40 overflow-x-hidden overflow-y-hidden pt-0"
            />
        </Link>
    )
}

export default Header
