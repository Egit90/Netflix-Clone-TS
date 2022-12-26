import React from 'react'
import { Header } from '../components'

interface Props {
    children: React.ReactNode
}

const HeaderContainer = ({ children }: Props) => {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to="/" img="logo.svg" alt="logo" />
                <Header.Button to="/signin" text="Sign In" />
            </Header.Frame>
            {children}
        </Header>
    )
}

export default HeaderContainer
