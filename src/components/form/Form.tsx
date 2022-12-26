import React, { ChangeEventHandler, FormEvent, FormEventHandler } from 'react'
import { Link } from 'react-router-dom'

// interface Props {
//     children?: React.ReactNode
//     onSubmit?: FormEventHandler
//     method?: string | undefined
//     onChange?: ChangeEventHandler | undefined
//     placeHolder?: string
//     value?: string | ReadonlyArray<string> | number | undefined
//     type?: string
//     disabled?: boolean
// }
type Props = React.HTMLProps<HTMLInputElement> & {
    placeHolder?: string
    value?: string | number
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    type?: string
    onSubmit?: FormEventHandler
    to?: string
}

const Form = ({ children }: Props) => {
    return (
        <div className="flex flex-col min-h-[660px] bg-[rgba(0,0,0,0.75)] rounded-md  w-full m-auto max-w-md pt-14 px-16 pb-10 mb-24">
            {children}
        </div>
    )
}

Form.Error = ({ children }: Props) => {
    return (
        <div className="bg-[#e87c03] rounded-md text-sm mb-4 text-white py-4 px-5">
            {children}
        </div>
    )
}

Form.Base = ({ children, onSubmit, method }: Props) => {
    return (
        <form
            className="flex flex-col max-w-md w-full"
            onSubmit={onSubmit}
            method={method}
        >
            {children}
        </form>
    )
}

Form.Title = ({ children }: Props) => {
    return <h1 className="text-[#fff] text-3xl font-bold mb-7">{children}</h1>
}
Form.Text = ({ children }: Props) => {
    return <p className="text-[#737373] text-lg font-medium">{children}</p>
}
Form.TextSmall = ({ children }: Props) => {
    return (
        <p className="mt-2 text-sm leading-normal text-[#8c8c8c]">{children}</p>
    )
}
Form.Link = ({ children, to = '#' }: Props) => {
    return (
        <Link to={to} className="text-white hover:underline">
            {children}
        </Link>
    )
}
Form.Input = ({ placeHolder, value, onChange, type }: Props) => {
    return (
        <input
            className="bg-[#333] rounded border-none text-white h-12 py-1 px-5 mb-5 last-of-type:mb-8 "
            placeholder={placeHolder}
            value={value}
            onChange={onChange}
            type={type}
        />
    )
}
Form.Submit = ({ children, disabled }: Props) => {
    return (
        <button
            disabled={disabled}
            className="bg-[#e50914] rounded text-sm font-bold mt-6 my-0 mb-3 p-4 border-none text-white cursor-pointer disabled:opacity-50"
        >
            {children}
        </button>
    )
}

export default Form
