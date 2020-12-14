import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Heading, Box } from "@chakra-ui/react";
import SinglePost from '../components/SinglePost';
import { getAllPosts } from '../store/actions/postActions';


const HomePage = () => {

    const dispatch = useDispatch()
    const post = useSelector(state => state.post)
    console.log(post.data);
    
    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch])

    return (
        <Box boxShadow="2xl" m={6} p="6" rounded="md" bg="white">
            <Heading mb={2}>Latest Updates</Heading>
            <hr />
            <Box mt={2}>
                {post.data.length > 0 && post.data.map(post => <SinglePost post={post} key={post.id} />)}
            </Box>
        </Box>
    )

}


export default HomePage