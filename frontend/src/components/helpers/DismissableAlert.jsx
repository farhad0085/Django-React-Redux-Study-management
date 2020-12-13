import React, { useState } from 'react'
import { Alert, AlertIcon, CloseButton } from "@chakra-ui/react";

const DismissableAlert = ({ text, ...rest }) => {

    const [dismiss, setDismiss] = useState(true)


    return (
        <>
            { dismiss && (
                <Alert status="success" {...rest}>
                    <AlertIcon />
                    {text}
                    <CloseButton onClick={() => setDismiss(false)} position="absolute" right="8px" top="8px" />
                </Alert>
            )}
        </>
    )

}


export default DismissableAlert