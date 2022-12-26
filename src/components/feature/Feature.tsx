import React from 'react'
interface Props {
    children: React.ReactNode
}

interface TextProps {
    text: string
}

const Feature = ({ children }: Props) => {
    return (
        <div className="flex flex-col border-b-[#222] border-solid  border-b-8 text-center px-11 py-40">
            {children}
        </div>
    )
}

Feature.Title = ({ text }: TextProps) => {
    return (
        <h1 className="text-white max-w-2xl md:text-[50px] font-semibold m-auto sm:text-[35px]">
            {text}
        </h1>
    )
}

Feature.SubTitle = ({ text }: TextProps) => {
    return (
        <h2 className="text-white  md:text-[26px] font-normal m-auto sm:text-[18px]">
            {text}
        </h2>
    )
}

export default Feature
