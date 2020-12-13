import React, { useState } from 'react'
import BaseFormCard from '../../components/BaseFormCard';
import SubmitButton from '../../components/helpers/SubmitButton';
import FormField from '../../components/helpers/FormField';

const RegisterPage = () => {

    const [email, setEmail] = useState("")
    const [registrationNo, setRegistrationNo] = useState("")
    const [name, setName] = useState("")
    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")

    const submitHandler = event => {
       event.preventDefault()
    }

    return (
        <BaseFormCard title="Create an Account" type="register">
            <form onSubmit={submitHandler}>

                <FormField
                    label="Email address"
                    value={email}
                    onChange={setEmail}
                    placeholder="Email"
                    type="email"
                />

                <FormField
                    label="Full Name"
                    value={name}
                    onChange={setName}
                    placeholder="Full Name"
                    type="text"
                />

                <FormField
                    label="Registration No."
                    value={registrationNo}
                    onChange={setRegistrationNo}
                    type="text"
                    placeholder="2017338017"
                />

                <FormField
                    label="Password"
                    value={password1}
                    onChange={setPassword1}
                    placeholder="Password"
                    type="password"
                />
                <FormField
                    label="Confirm Password"
                    value={password2}
                    onChange={setPassword2}
                    placeholder="Confirm Password"
                    type="password"
                />

                <SubmitButton title="Register" />
            </form>
        </BaseFormCard>
    )
}


export default RegisterPage