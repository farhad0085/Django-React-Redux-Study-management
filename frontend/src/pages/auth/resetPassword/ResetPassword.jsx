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

    const [new_password1, setPassword1] = useState("");
    const [new_password2, setPassword2] = useState("");

    const {uid, token} = props.match.params;

    const auth = useSelector(state => state.auth);

    const submitHandler = event => {
        event.preventDefault();

        dispatch(resetPassword(token, uid, new_password1, new_password2));
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
                    value={new_password1}
                    onChange={setPassword1}
                    placeholder="Password"
                    type="password"
                    isInvalid={!!auth.resetPasswordErrors.new_password1}
                    errorMsg={auth.resetPasswordErrors.new_password1}
                />

                <FormField
                    label="Confirm Password"
                    value={new_password2}
                    onChange={setPassword2}
                    placeholder="Confirm Password"
                    type="password"
                    isInvalid={!!auth.resetPasswordErrors.new_password2}
                    errorMsg={auth.resetPasswordErrors.new_password2}
                />

                <SubmitButton isLoading={auth.loading} loadingText="Resetting..." title="Reset Password" />
            </form>
            {auth.passwordResetted && <DismissableAlert mt={2} text="Password changed successfully!" type="success" />}
            {Object.keys(auth.resetPasswordErrors).length > 0 && <DismissableAlert mt={2} text="Failed to change password!" type="error" />}
        </BaseFormCard>
    )
}

export default ResetPassword