import React, { useState } from 'react'
import BaseFormCard from '../../../components/BaseFormCard';
import { resetPassword } from "../../../store/actions/authActions";
import { useDispatch, useSelector } from 'react-redux'
import SubmitButton from '../../../components/helpers/SubmitButton';
import FormField from '../../../components/helpers/FormField';
import DismissableAlert from '../../../components/helpers/DismissableAlert';
import { Box, Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react"


const ResetPassword = (props) => {

    const dispatch = useDispatch();

    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");

    const {uid, token} = props.match.params;

    const auth = useSelector(state => state.auth);

    const submitHandler = event => {
        event.preventDefault();
        dispatch(resetPassword(uid, token, password1, password2));
    }

    return (
        <BaseFormCard title="Reset Password">
            <Alert status="info" mb={2}>
                <AlertIcon />
                <Box flex="1">
                    <AlertTitle>Create your super secret password!</AlertTitle>
                    <AlertDescription display="block">
                        Reset Your Password from the bellow form.
                    </AlertDescription>
                </Box>
            </Alert>
            <form onSubmit={submitHandler}>

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

                <SubmitButton isLoading={auth.loading} loadingText="Resetting..." title="Reset Password" />
            </form>
            {Object.keys(auth.loginErrors).length > 0 && <DismissableAlert mt={2} text="Unable to reset password!" type="error" />}
        </BaseFormCard>
    )
}

export default ResetPassword