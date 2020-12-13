import React, { useState } from 'react'
import { FormControl, Button, FormLabel, FormErrorMessage, Input } from "@chakra-ui/react";
import BaseFormCard from '../../components/BaseFormCard';
import { login } from "../../store/actions/authActions";
import { connect } from 'react-redux'


const LoginPage = ({ login, history }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = event => {
        event.preventDefault()

        login({ email, password }, history)

    }

    return (
        <BaseFormCard title="User Login" type="login">
            <form onSubmit={submitHandler}>
                <FormControl id="formBasicEmail">
                    <FormLabel>Email address</FormLabel>
                    <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email"
                    />
                </FormControl>

                <FormControl id="formBasicPassword">
                    <FormLabel>Password</FormLabel>
                    <Input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                    />
                </FormControl>
                <Button colorScheme="teal" mt="20px" type="submit">
                    Login
                </Button>
            </form>
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