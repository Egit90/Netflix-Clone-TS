import React, { MouseEvent, MouseEventHandler } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

interface Props {
    children?: React.ReactNode
    bg?: boolean
    src?: string
    definite?: boolean
    to?: string
    onMouseEnter?: () => void
    onMouseLeave?: () => void
    onClick?: () => void
}

interface Input {
    searchTerm: string
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

const Header = ({ children, src, bg = true, definite = true }: Props) => {
    let backGround
    let style
    if (definite) {
        backGround = src
            ? `bg-[url('${src}')]`
            : "bg-[url('/images/misc/home-bg.jpg')]"
    } else {
        style = { backgroundImage: `url(${src})` }
    }

    return bg ? (
        <div
            style={style}
            className={`flex flex-col ${backGround} bg-left-top bg-cover bg-no-repeat`}
        >
            {children}
        </div>
    ) : (
        <>{children}</>
    )
}
Header.HeaderForBrowse = ({
    children,
    src,
    bg = true,
    definite = true,
}: Props) => {
    let backGround
    let style
    if (definite) {
        backGround = src
            ? `bg-[url('${src}')]`
            : "bg-[url('/images/misc/home-bg.jpg')]"
    } else {
        style = { backgroundImage: `url(${src})` }
    }

    return bg ? (
        <div style={style} className={`flex flex-col bg-cover-pic`}>
            {children}
        </div>
    ) : (
        <>{children}</>
    )
}

Header.Frame = ({ children }: Props) => {
    return (
        <div className="flex my-0 mx-14 h-28 px-4 py-0 justify-between items-center whitespace-nowrap ">
            {children}
        </div>
    )
}

Header.Group = ({ children }: Props) => {
    return (
        <div className="flex items-center last-of-type:m-0  last-of-type:left-0 ">
            {children}
        </div>
    )
}
Header.Feature = ({ children, src }: Props) => {
    return (
        <div className="flex flex-col  my-0 mx-8 pt-24 lg:pt-36 pb-[500px] px-0   w-1/2">
            {children}
        </div>
    )
}

Header.FeatureCallOut = ({ children, src }: Props) => {
    return (
        <h2 className="text-white text-3xl lg:text-5xl mb-5 font-bold leading-normal text-shadow m-0">
            {children}
        </h2>
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
Header.Text = ({ children }: Props) => {
    return (
        <p className="text-white text-lg lg:text-2xl leading-normal text-shadow m-0">
            {children}
        </p>
    )
}
Header.TextLink = ({ children, onClick }: Props) => {
    return (
        <p
            onClick={onClick}
            className="text-white ml-6 mr-7 cursor-pointer hover:font-bold last-of-type:mr-0"
        >
            {children}
        </p>
    )
}

Header.Logo = ({
    to,
    img,
    alt,
    absolute = false,
}: {
    to: string
    img: string
    alt: string
    absolute?: boolean
}) => {
    return (
        <Link to={to}>
            <img
                src={img}
                alt={alt}
                className={`h-6  w-24 sm:h-8 sm:w-28 lg:h-9 lg:w-36 xl:h-11 xl:w-40 overflow-x-hidden overflow-y-hidden pt-0 ${
                    absolute ? 'absolute' : ''
                }`}
            />
        </Link>
    )
}

Header.Profile = ({ children, onMouseEnter, onMouseLeave }: Props) => {
    return (
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="flex items-center ml-5 relative "
        >
            {children}
        </div>
    )
}
Header.Picture = ({ src }: Props) => {
    return (
        <button
            style={{ backgroundImage: `url(${src})` }}
            className={`bg-contain border-none w-8 h-7 cursor-pointer bg-no-repeat`}
        />
    )
}

Header.DropDown = ({ children }: Props) => {
    return (
        <div className="bg-black absolute mt-10 p-3 w-32 top-8 right-3 flex flex-col">
            {children}
        </div>
    )
}

Header.Search = ({ searchTerm, setSearchTerm }: Input) => {
    const [searchActive, setSearchActive] = useState(false)
    let customMargin =
        searchActive === true
            ? 'ml-[10ox] py-0 px-[10] opacity-[1] w-[200px]'
            : 'ml-0 p-0 opacity-[0] w-0'
    return (
        <div className="flex items-center invisible sm:visible">
            <button
                className="cursor-pointer bg-transparent border-none "
                onClick={() => setSearchActive((prev) => !prev)}
            >
                <img
                    src="/images/icons/search.png"
                    alt="search"
                    className="filter brightness-0 invert-[1] w-4"
                />
            </button>
            <input
                className={`bg-[#44444459] text-white border-[1px] border-solid border-white ${customMargin} transition-all ease-in-out`}
                value={searchTerm}
                onChange={({ target }) => setSearchTerm(target.value)}
                placeholder="Search Films and Series"
            />
        </div>
    )
}

Header.PlayButton = ({ children }: Props) => {
    return (
        <button className=" font-bold shadow-md bg-[#e6e6e6] border-0 py-2 px-5 rounded-md max-w-[130px] text-xl mt-6 cursor-pointer transition-colors ease-in-out hover:bg-[#ff1e1e] hover:text-white">
            {children}
        </button>
    )
}

export default Header
