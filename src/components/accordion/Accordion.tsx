import React, { createContext, useContext, useState } from 'react'
interface Context {
    toggleShow: boolean
    setToggle: React.Dispatch<React.SetStateAction<boolean>>
}
const ToggleContext = createContext({} as Context)

interface Props {
    children?: React.ReactNode
}

const Accordion = ({ children }: Props) => {
    return (
        <div className="flex border-b-8 border-solid border-[#222]">
            <div className="flex flex-col py-[70px] px-[20px] max-w-[815px] m-auto">
                {children}
            </div>
        </div>
    )
}

Accordion.Title = ({ children }: Props) => {
    return (
        <h1 className="text-[1.625rem] mt-[0] mb-2 text-white text-center sm:text-4xl md:px-[150px]">
            {children}
        </h1>
    )
}

Accordion.Frame = ({ children }: Props) => {
    return <div className="mb-10">{children}</div>
}
Accordion.Item = ({ children }: Props) => {
    const [toggleShow, setToggle] = useState(false)
    return (
        <ToggleContext.Provider value={{ toggleShow, setToggle }}>
            <div className="text-white  mb-3 max-w-3xl w-full first-of-type:mt-[3em] last-of-type:mb-0 ">
                {children}
            </div>
        </ToggleContext.Provider>
    )
}

Accordion.Header = ({ children }: Props) => {
    const { toggleShow, setToggle } = useContext(ToggleContext)
    let src = toggleShow
        ? '/images/icons/close-slim.png'
        : '/images/icons/add.png'
    let alt = toggleShow ? 'Close' : 'Open'

    return (
        <div
            onClick={() => setToggle((e) => !e)}
            className=" flex justify-between cursor-pointer mb-[1px] text-[26px] font-normal  bg-[#303030]  w-full 
            py-[0.8em] px-[1.2em] items-center select-none sm:font-[16px] "
        >
            {children}
            <img
                className="brightness-[0] invert-[1] w-6 sm:w-4 justify-end"
                src={src}
                alt={alt}
            />
        </div>
    )
}

Accordion.Body = ({ children }: Props) => {
    const { toggleShow } = useContext(ToggleContext)
    return toggleShow ? (
        <div className="font-normal leading-normal max-h-[1200px]  transition-height  text-[26px] bg-[#303030] whitespace-pre-wrap select-none sm:text-[16px] sm:leading-6 ">
            {children}
        </div>
    ) : null
}

export default Accordion
