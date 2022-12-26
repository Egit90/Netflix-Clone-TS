// https://www.youtube.com/watch?v=x_EEwGe-a9o
// 2:20:47
import React from 'react'

interface Props {
    children: React.ReactNode
}

interface Bar {
    placeHolder: string
    text: string
}

const OptFrom = ({ children }: Props) => {
    return (
        <div className="flex justify-center flex-wrap  flex-col md:flex-row lg:h-full lg:flex lg:mt-5 lg: lg:items-center lg:justify-center ">
            {/* <div className="flex-row md:flex-column flex items-center justify-center h-full mt-20 flex-wrap"> */}
            {children}
        </div>
    )
}

OptFrom.Input = ({ placeHolder }: { placeHolder: string }) => {
    return (
        <input
            placeholder={placeHolder}
            className="max-w-md w-full border-none p-3 h-16 box-border"
        />
    )
}

OptFrom.Button = ({ children }: Props) => {
    return (
        <button
            className="flex justify-center items-center md:h-16 bg-[#e50914] text-white uppercase  border-none border-0 p-3 md:text-[26px] cursor-pointer hover:bg-[#f40612]
        h-[50px] text-[16px]  sm:font-bold md:font-normal
        
        "
        >
            {children}
            <img
                src="/images/icons/chevron-right.png"
                alt="Try now"
                className="ml-2 brightness-0 invert-[1] w-4 lg:w-6"
            />
        </button>
    )
}

OptFrom.Text = ({ children }: Props) => {
    return (
        <p className="md:text-[19.2px] text-white  text-center text-[16px] mb-2 basis-full ">
            {children}
        </p>
    )
}

OptFrom.Bar = ({ placeHolder, text }: Bar) => {
    return (
        <>
            <input
                placeholder={placeHolder}
                className="max-w-md w-full border-none p-3 h-16 box-border"
            />
            <button
                className="flex justify-center items-center md:h-16 bg-[#e50914] text-white uppercase  border-none border-0 p-3 md:text-[26px] cursor-pointer hover:bg-[#f40612]
    h-[50px] text-[16px]  sm:font-bold md:font-normal
    "
            >
                {text}
                <img
                    src="/images/icons/chevron-right.png"
                    alt="Try now"
                    className="ml-2 brightness-0 invert-[1] w-4 lg:w-6"
                />
            </button>
        </>
    )
}

export default OptFrom
