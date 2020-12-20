import React from 'react'
import { Heading } from "@chakra-ui/react";


const Title = ({title, children, ...rest}) => {

    if (children) {
        return (
            <Heading opacity="0.7" size="md" mb={2} {...rest}>{children}</Heading>
        )
    }

    return (
        <Heading opacity="0.7" size="md" mb={2} {...rest}>{title}</Heading>
    )

}


export default Title