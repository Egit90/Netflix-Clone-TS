import React from 'react'
import { JumbotronContainer } from '../containers/JumbotronContainer'
import AccordionContainer from '../containers/AccordionContainer'
import FooterContainer from '../containers/FooterContainer'
import { Feature, Header, OptFrom } from '../components'
import HeaderContainer from '../containers/HeaderContainer'

const Home = () => {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title text="Unlimited movies, TV shows, and more" />
                    <Feature.SubTitle text="Watch anywhere. Cancel anytime." />
                    <OptFrom>
                        <OptFrom.Text>
                            Ready to watch? Enter your email to create or
                            restart your membership.
                        </OptFrom.Text>
                        <OptFrom.Bar
                            placeHolder="Email Address"
                            text="Get Started"
                        />
                    </OptFrom>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <AccordionContainer />
            <FooterContainer />
        </>
    )
}

export default Home
