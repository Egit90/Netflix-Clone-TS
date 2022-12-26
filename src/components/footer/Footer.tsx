import React, { Children } from 'react'

interface Props {
    children?: React.ReactNode
    link?: string
}
const Footer = ({ children }: Props) => {
    return (
        <div className="flex pt-16 pr-14 m-auto max-w-5xl flex-col sm-p">
            {children}
        </div>
    )
}

Footer.Row = ({ children }: Props) => {
    return <div className="grid grid-cols-new gap-4 grid_sm">{children}</div>
}

Footer.Column = ({ children }: Props) => {
    return <div className="flex flex-col text-left">{children}</div>
}

Footer.Link = ({ children, link = '#' }: Props) => {
    return (
        <a
            href={link}
            className="text-[#757575] mb-5 text-[15px] decoration-[none]"
        >
            {children}
        </a>
    )
}

Footer.Title = ({ children }: Props) => {
    return <p className="text-[16px] text-[#757575] mb-10 ">{children}</p>
}

Footer.Text = ({ children }: Props) => {
    return <p className="text-[13px] text-[#757575] mb-10 ">{children}</p>
}

Footer.Break = ({ children }: Props) => {
    return <p className="flex basis-[100%] h-[0]">{children}</p>
}

export default Footer
