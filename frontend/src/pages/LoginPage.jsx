import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap";
import BaseFormCard from '../components/BaseFormCard';
import { login } from "../store/actions/authActions";
import { connect } from 'react-redux'


const LoginPage = ({ login, history }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = event => {
        event.preventDefault()

        login({email, password}, history)

    }

    return (
        <BaseFormCard title="User Login" type="login">
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email"
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Group>
                <Button variant="primary" block type="submit">
                    Login
                </Button>
            </Form>
        </BaseFormCard>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (creds, history) => dispatch(login(creds, history))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)