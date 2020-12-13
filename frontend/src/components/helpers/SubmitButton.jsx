import React from 'react'
import { Button } from "@chakra-ui/react";

const SubmitButton = ({ title }) => {

    return (
        <Button colorScheme="teal" mt={2} type="submit">
            {title}
        </Button>
    )

}


export default SubmitButton