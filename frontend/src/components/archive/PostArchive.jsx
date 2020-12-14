import React from 'react'
import { Heading, Box } from "@chakra-ui/react";
import Posts from '../post/Posts';


const PostArchive = ({title, posts}) => {


    return (
        <Box boxShadow="2xl" m={6} p="6" rounded="md" bg="white">
            <Heading size="md" mb={2}>{title}</Heading>
            <hr />
            <Box mt={2}>
                {posts.length > 0 && <Posts posts={posts} />}
            </Box>
        </Box>
    )

}


export default PostArchive