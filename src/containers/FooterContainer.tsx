import React from 'react'
import { Footer } from '../components'

const FooterContainer = () => {
    return (
        <Footer>
            <Footer.Title> Questions? Call us </Footer.Title>
            <Footer.Break />
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link link="#">FAQ</Footer.Link>
                    <Footer.Link link="#">Investor Relations</Footer.Link>
                    <Footer.Link link="#">Ways to Watch</Footer.Link>
                    <Footer.Link link="#">Corporate Information </Footer.Link>
                    <Footer.Link link="#">Netflix Originals</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link link="#">Help Center</Footer.Link>
                    <Footer.Link link="#">Jobs</Footer.Link>
                    <Footer.Link link="#">Term Of Use</Footer.Link>
                    <Footer.Link link="#">Contact Us </Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link link="#">Account</Footer.Link>
                    <Footer.Link link="#">Redeem Gift Cards</Footer.Link>
                    <Footer.Link link="#">Privacy</Footer.Link>
                    <Footer.Link link="#">Speed Test </Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link link="#">Media Center</Footer.Link>
                    <Footer.Link link="#">Buy Gift Cards</Footer.Link>
                    <Footer.Link link="#">Cookie Preferences</Footer.Link>
                    <Footer.Link link="#">Legal Notices</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            <Footer.Break />
            <Footer.Text> Netflix </Footer.Text>
        </Footer>
    )
}

export default FooterContainer
