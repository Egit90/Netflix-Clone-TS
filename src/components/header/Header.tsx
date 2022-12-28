import React, { MouseEvent, MouseEventHandler } from 'react'
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

export default Header
