import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link, Spacer, Flex, Container } from "@chakra-ui/react";
import Title from '../components/helpers/Title';

const BaseFormCard = (props) => {

    return (
        <Container maxW="xl">
            <Box boxShadow="2xl" m={6} p="6" rounded="md" bg="white">

                <Title as="h2" size="lg" letterSpacing={"-.1rem"} title={props.title}/>
                <hr />
                <Box mb={4} mt={4}>
                    {props.children}
                </Box>

                {props.type === "login" && (
                    <Flex>
                        <Link color="teal.500" as={RouterLink} to="/forget-password">Forgot Password?</Link>
                        <Spacer />
                        <Link color="teal.500" as={RouterLink} to="/register">Create an Account</Link>
                    </Flex>
                )}
                {props.type === "register" && (
                    <Link color="teal.500" as={RouterLink} to="/login">Already have account? Login here</Link>
                )}
            </Box>
        </Container>
    )
}

export default BaseFormCard