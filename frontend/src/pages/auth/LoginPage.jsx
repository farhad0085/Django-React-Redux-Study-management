import React, { useState } from 'react'
import BaseFormCard from '../../components/BaseFormCard';
import { login } from "../../store/actions/authActions";
import { useDispatch, useSelector } from 'react-redux'
import SubmitButton from '../../components/helpers/SubmitButton';
import FormField from '../../components/helpers/FormField';

const LoginPage = ({ history }) => {

    const dispatch = useDispatch()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const auth = useSelector(state => state.auth)

    const submitHandler = event => {
        event.preventDefault()
        dispatch(login({ email, password }, history))
    }

    return (
        <BaseFormCard title="User Login" type="login">
            <form onSubmit={submitHandler}>

                <FormField
                    label="Email address"
                    value={email}
                    onChange={setEmail}
                    placeholder="Email"
                    type="email"
                />

                <FormField
                    label="Password"
                    value={password}
                    onChange={setPassword}
                    placeholder="Password"
                    type="password"
                />

                <SubmitButton isLoading={auth.loading} loadingText="Logging in..." title="Login" />
            </form>
        </BaseFormCard>
    )
}

export default LoginPage