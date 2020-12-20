import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { Box, Heading, Flex, Text, Button } from "@chakra-ui/react";
import MenuIcon from './MenuIcon';
import { AddIcon } from "@chakra-ui/icons";

const NavItem = ({ children }) => (
    <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
        {children}
    </Text>
);

const Navigation = props => {
    const [show, setShow] = React.useState(false);
    const handleToggle = () => setShow(!show);

    const auth = useSelector(state => state.auth)


    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding="1.5rem"
            bg="teal.500"
            color="white"
            {...props}
            mb={4}
        >
            <Flex align="center" mr={5}>
                <Heading as="h1" size="lg" letterSpacing={"0.2rem"}>
                    <Link to="/">Study Management</Link>
                </Heading>
            </Flex>

            <Box cursor="pointer" display={{ base: "block", md: "none" }} onClick={handleToggle}>
                <MenuIcon />
            </Box>

            <Box
                display={{ sm: show ? "block" : "none", md: "flex" }}
                width={{ sm: "full", md: "auto" }}
                alignItems="center"
                flexGrow={1}
            >
                <NavItem><NavLink to="/courses" exact>Courses</NavLink></NavItem>
                <NavItem><NavLink to="/semesters" exact>Semesters</NavLink></NavItem>
            </Box>

            <Box
                display={{ sm: show ? "block" : "none", md: "block" }}
                mt={{ base: 4, md: 0 }}
            >
                {auth.isAuthenticated ? (
                    <>
                    <Button as={NavLink} to="/post/new" leftIcon={<AddIcon />} mr={{ base: 2 }} bg="transparent" border="1px">
                        Upload
                    </Button>
                    <Button isLoading={auth.loading} as={NavLink} to="/logout" mr={{ base: 2 }} bg="transparent" border="1px">
                        Logout
                    </Button>
                    </>
                ) : (
                        <>
                            <Button as={NavLink} to="/login" mr={{ base: 2 }} bg="transparent" border="1px">
                                Login
                            </Button>
                            <Button as={NavLink} to="/register" bg="transparent" border="1px">
                                Create account
                            </Button>
                        </>
                    )}

            </Box>
        </Flex>
    );
};

export default Navigation;
