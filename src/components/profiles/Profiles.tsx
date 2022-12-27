import React from 'react'

interface Children {
    children: React.ReactNode
    onClick?: () => void
}

const Profiles = ({ children }: Children) => {
    return (
        <div className="flex flex-col justify-center items-center m-auto max-w-[80%] ">
            {children}
        </div>
    )
}

Profiles.Title = ({ children }: Children) => {
    return (
        <h1 className="w-full text-white text-5xl text-center font-medium ">
            {children}
        </h1>
    )
}
Profiles.List = ({ children }: Children) => {
    return <ul className="m-0 p-0 flex flex-row ">{children}</ul>
}

Profiles.Picture = ({ src }: { src: string }) => {
    return (
        <img
            className="w-full max-w-[150px] cursor-pointer h-auto border-black border-[3px] border-solid hover:border-white hover:border-[3px] hover:border-solid "
            src={src ? `/images/users/${src}.png` : `/images/misc/loading.gif`}
        />
    )
}
Profiles.Name = ({ children }: Children) => {
    return (
        <p className="text-[#808080] text-ellipsis text-base hover:text-[#e5e5e5] hover:font-bold ">
            {children}
        </p>
    )
}
Profiles.User = ({ children, onClick }: Children) => {
    return (
        <li
            onClick={onClick}
            className="max-h-52 max-w-[200px] list-none text-center mr-8  last-of-type:mr-0"
        >
            {children}
        </li>
    )
}

export default Profiles
