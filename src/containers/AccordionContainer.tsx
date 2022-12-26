import React from 'react'
import { Accordion, OptFrom } from '../components'
import faqsData from '../fixtures/faqs.json'

const AccordionContainer = () => {
    return (
        <Accordion>
            <Accordion.Title> Frequently Asked Questions</Accordion.Title>
            {faqsData.map((item) => (
                <Accordion.Item key={item.id}>
                    <Accordion.Header> {item.header}</Accordion.Header>
                    <Accordion.Body> {item.body}</Accordion.Body>
                </Accordion.Item>
            ))}
            <Accordion.Item />
            <OptFrom>
                <OptFrom.Text>
                    Ready to watch? Enter your email to create or restart your
                    membership.
                </OptFrom.Text>
                <OptFrom.Input placeHolder="Email Address" />
                <OptFrom.Button>Get Started</OptFrom.Button>
            </OptFrom>
        </Accordion>
    )
}

export default AccordionContainer
