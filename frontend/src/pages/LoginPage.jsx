import React, { Component } from 'react'
import { Form, Button} from "react-bootstrap";
import BaseFormCard from '../components/BaseFormCard';


class LoginPage extends Component {

    state = {}

    render() {
        return (
            <BaseFormCard title="User Login" type="login">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" block type="submit">
                        Login
                    </Button>
                </Form>
            </BaseFormCard>
        )
    }
}

export default LoginPage