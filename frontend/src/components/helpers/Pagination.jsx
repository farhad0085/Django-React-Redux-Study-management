import React from 'react'
import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import { loadPage } from "../../store/actions/postActions";
import { useDispatch } from "react-redux";

const Pagination = ({ postData }) => {

    const { next, previous } = postData;

    const dispatch = useDispatch()


    return (
        <Box mt={2}>
            <Flex>
                <Button onClick={() => dispatch(loadPage({}, "previous"))} disabled={!previous} mr={{ base: 2 }} bg="transparent" border="1px">
                    Previous
            </Button>
                <Spacer />
                <Button onClick={() => dispatch(loadPage({}, "next"))} disabled={!next} bg="transparent" border="1px">
                    Next
            </Button>
            </Flex>
        </Box>
    )

}


export default Pagination