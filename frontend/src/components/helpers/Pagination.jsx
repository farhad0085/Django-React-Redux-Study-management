import React from 'react'
import { Box, Button } from "@chakra-ui/react";
import { loadPage } from "../../store/actions/postActions";
import { useDispatch } from "react-redux";

const Pagination = ({ postData }) => {

    const { next, previous } = postData;
    console.log(next, previous);

    const dispatch = useDispatch()


    return (
        <Box mt={2}>
            <Button onClick={() => dispatch(loadPage({}, "previous"))} disabled={!previous} mr={{ base: 2 }} bg="transparent" border="1px">
                Previous
            </Button>
            <Button onClick={() => dispatch(loadPage({}, "next"))} disabled={!next} mr={{ base: 2 }} bg="transparent" border="1px">
                Next
            </Button>
        </Box>
    )

}


export default Pagination