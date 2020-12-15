import React from 'react'
import { Skeleton } from "@chakra-ui/react";
import { BeatLoader } from "react-spinners";

const Loading = ({ skeleton, ...rest }) => {

    if (skeleton) {
        return (
            <Skeleton {...rest} height="20px" />
        )
    }

    else {
        return (
            <BeatLoader {...rest} />
        )
    }
}


export default Loading