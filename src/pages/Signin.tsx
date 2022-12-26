import React, { FormEvent, useState } from 'react'
import HeaderContainer from '../containers/HeaderContainer'
import FooterContainer from '../containers/FooterContainer'
import * as ROUTES from '../constants/routes'
import { Form } from '../components/form'
import { useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/firebase'

const Signin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const { login } = useUserAuth()
    const inValid = password === '' || email === ''
    const handleSignIn = async (e: FormEvent) => {
        e.preventDefault()
        try {
            await login(email, password)
            navigate(ROUTES.BROWSE)
        } catch (error) {
            setEmail('')
            setPassword('')
            setError(error.message)
        }
    }
    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignIn} method="POST">
                        <Form.Input
                            placeHolder="Email Address"
                            value={email}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setEmail(e.target?.value)}
                        />
                        <Form.Input
                            placeHolder="Password"
                            value={password}
                            type="password"
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setPassword(e.target?.value)}
                        />
                        <Form.Submit disabled={inValid}>Sign In</Form.Submit>
                    </Form.Base>
                    <Form.Text>
                        New? <Form.Link to={'/signup'}> Sign Up Now </Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        Protected By Google reCAPTCHA
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>

            <FooterContainer />
        </>
    )
}

export default Signin
