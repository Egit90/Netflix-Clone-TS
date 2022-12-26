import React, { FormEvent, useState } from 'react'
import HeaderContainer from '../containers/HeaderContainer'
import FooterContainer from '../containers/FooterContainer'
import * as ROUTES from '../constants/routes'
import { Form } from '../components/form'
import { useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/firebase'
const SignUp = () => {
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { signUp, setProfilePicture, user } = useUserAuth()
    const inValid = firstName === '' || password === '' || email === ''

    const handleSignUp = async (e: FormEvent) => {
        e.preventDefault()
        try {
            await signUp(email, password)
            await setProfilePicture(user, firstName)
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
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignUp} method="POST">
                        <Form.Input
                            placeHolder="First Name"
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setFirstName(e.target?.value)}
                        />
                        <Form.Input
                            placeHolder="Email Address"
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
                        <Form.Submit disabled={inValid} type="submit">
                            Sign Up
                        </Form.Submit>
                        <Form.Text>
                            Already a user?{' '}
                            <Form.Link to="/signin">Sign In</Form.Link>
                        </Form.Text>
                        <Form.TextSmall>
                            Protected By Google reCAPTCHA
                        </Form.TextSmall>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}

export default SignUp
