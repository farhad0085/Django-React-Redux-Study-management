import React, {useState} from 'react'
import { Heading, Text, Box, List, ListItem, ListIcon, Image, Wrap, WrapItem } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import Loading from '../helpers/Loading';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { Link as ChakraLink } from "@chakra-ui/react";


const SinglePost = ({ post }) => {

    const images = []

    post.questions.map(question => question.pictures.map(picture => images.push(picture)))

    const [isOpen, setIsOpen] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0)


    const imageOnClick = (index) => {
        setPhotoIndex(index)
        setIsOpen(true)
    }

    return (
        <Box key={post.id} boxShadow="md" my={6} p="6" rounded="md" bg="white">
            <Heading opacity="0.7" size="sm" mb={2}>{post.title}</Heading>
            <hr />
            <Text mt={2}>{post.body}</Text>
            <Heading opacity="0.7" size="sm" my={2}>Attachments</Heading>
            <Wrap>
                {post.questions.map(question => {
                    return question.pictures.map((picture, index) => {
                        return (
                            <WrapItem key={picture.id}>
                                <Box rounded="md" boxShadow="md">
                                    <Image
                                        onClick={() => imageOnClick(index)}
                                        boxSize="100px"
                                        objectFit="cover"
                                        cursor="pointer"
                                        src={picture.picture}
                                        alt={picture.picture}
                                        _hover={{opacity: 0.5}}
                                        fallback={<Loading />}
                                    />
                                </Box>
                            </WrapItem>
                        )
                    })
                })}
            </Wrap>
            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex].picture}
                    nextSrc={images[(photoIndex + 1) % images.length].picture}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length].picture}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                />
            )}

            <List mt={2} spacing={3}>
                {post.books.map(book => {
                    return (
                        <ListItem key={book.id}>
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            <ChakraLink target="_blank" href={book.file} _hover={{opacity: 0.5}}>
                                {book.title}
                            </ChakraLink>
                        </ListItem>
                    )
                })}
                {post.classnotes.map(note => {
                    return (
                        <ListItem key={note.id}>
                            <ListIcon as={CheckCircleIcon} color="green.500" />
                            <ChakraLink target="_blank" href={note.file} _hover={{opacity: 0.5}}>
                                {note.title}
                            </ChakraLink>
                        </ListItem>
                    )
                })}
            </List>
        </Box>
    )

}


export default SinglePost