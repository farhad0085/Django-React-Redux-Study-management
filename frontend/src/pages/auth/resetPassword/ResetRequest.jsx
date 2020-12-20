import React, { useState } from 'react'
import BaseFormCard from '../../../components/BaseFormCard';
import { resetPasswordRequest } from "../../../store/actions/authActions";
import { useDispatch, useSelector } from 'react-redux'
import SubmitButton from '../../../components/helpers/SubmitButton';
import FormField from '../../../components/helpers/FormField';
import DismissableAlert from '../../../components/helpers/DismissableAlert';
import { Box, Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react"


const ResetRequest = () => {

    const dispatch = useDispatch()

    const [email, setEmail] = useState("")

    const auth = useSelector(state => state.auth)

    const submitHandler = event => {
        event.preventDefault()
        dispatch(resetPasswordRequest(email))
    }

    return (
        <BaseFormCard title="Reset Password">
            <Alert status="info" mb={2}>
                <AlertIcon />
                <Box flex="1">
                    <AlertTitle>No Worry, Chill!</AlertTitle>
                    <AlertDescription display="block">
                    Forget your password? Not a big deal, enter your email and smash Enter key, we'll take care of the rest.
                    </AlertDescription>
                </Box>
            </Alert>
            <form onSubmit={submitHandler}>

                <FormField
                    label="Email address"
                    value={email}
                    onChange={setEmail}
                    placeholder="Email"
                    type="email"
                />

                <SubmitButton isLoading={auth.loading} loadingText="Requesting..." title="Reset Password" />
            </form>
            {Object.keys(auth.loginErrors).length > 0 && <DismissableAlert mt={2} text="Unable to login with the credentials!" type="error" />}
        </BaseFormCard>
    )
}

export default ResetRequest