import React from 'react'
import { Heading, Text, Box, List, ListItem, ListIcon } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const SinglePost = ({ post }) => {
    console.log(post);
    return (
        <Box key={post.id} boxShadow="outline" my={6} p="6" rounded="md" bg="white">
            <Heading size="sm" mb={2}>{post.title}</Heading>
            <hr />
            <Text mt={2}>{post.body}</Text>
            <Heading size="sm" my={2}>Attachments</Heading>
            <hr/>
            <List mt={2} spacing={3}>
                {post.pictures.map(picture => {
                    return (
                        <ListItem key={picture.id}>
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            <Link to={`/picture/${picture.picture}`}>
                                {picture.picture}
                            </Link>
                        </ListItem>
                    )
                })}
            </List>
        </Box>
    )

}


export default SinglePost