import React, { Component } from 'react'
import { Form, Button } from "react-bootstrap";
import BaseFormCard from '../components/BaseFormCard';


class RegisterPage extends Component {

    state = {}

    render() {
        return (
            <BaseFormCard title="Create an Account" type="register">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Full Name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" block type="submit">
                        Create Account
                </Button>
                </Form>
            </BaseFormCard>
        )
    }
}


export default RegisterPage