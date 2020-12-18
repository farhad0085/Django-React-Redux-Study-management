import React, {useState} from 'react'
import { Heading, Text, Box, List, ListItem, ListIcon, Image, Wrap, WrapItem } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import Loading from '../helpers/Loading';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 


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
            <Heading size="sm" mb={2}>{post.title}</Heading>
            <hr />
            <Text mt={2}>{post.body}</Text>
            <Heading size="sm" my={2}>Attachments</Heading>
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