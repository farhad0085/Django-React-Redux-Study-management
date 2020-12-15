import React from 'react'
import { Heading, Box } from "@chakra-ui/react";
import Posts from '../post/Posts';
import Pagination from '../helpers/Pagination';

const PostArchive = ({ title, postData }) => {

    const posts = postData.data;

    return (
        <Box boxShadow="2xl" m={6} p="6" rounded="md" bg="white">
            <Heading size="md" mb={2}>{title}</Heading>
            <hr />
            <Box mt={2}>
                {posts.length > 0 && <Posts posts={posts} />}
            </Box>

            {/* Pagination */}
            <Pagination postData={postData} />
        </Box>
    )

}


export default PostArchive