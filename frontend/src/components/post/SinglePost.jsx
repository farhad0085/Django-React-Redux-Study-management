import React from 'react'
import { Heading, Text, Box, List, ListItem, ListIcon, Image, Wrap, WrapItem } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import Loading from '../helpers/Loading';

const SinglePost = ({ post }) => {

    return (
        <Box key={post.id} boxShadow="md" my={6} p="6" rounded="md" bg="white">
            <Heading size="sm" mb={2}>{post.title}</Heading>
            <hr />
            <Text mt={2}>{post.body}</Text>
            <Heading size="sm" my={2}>Attachments</Heading>
            <Wrap>
                {post.questions.map(question => {
                    return question.pictures.map(picture => {
                        return (
                            <WrapItem key={picture.id}>
                                <Box rounded="md" boxShadow="md">
                                    <Image
                                        boxSize="100px"
                                        objectFit="cover"
                                        src={picture.picture}
                                        alt={picture.picture}
                                        fallback={<Loading />}
                                    />
                                </Box>
                            </WrapItem>
                        )
                    })
                })}
            </Wrap>
            <List mt={2} spacing={3}>
                {post.books.map(book => {
                    return (
                        <ListItem key={book.id}>
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            <Link to={`/book/${book.file}`}>
                                {book.file}
                            </Link>
                        </ListItem>
                    )
                })}
                {post.classnotes.map(note => {
                    return (
                        <ListItem key={note.id}>
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            <Link to={`/note/${note.file}`}>
                                {note.file}
                            </Link>
                        </ListItem>
                    )
                })}
            </List>
        </Box>
    )

}


export default SinglePost