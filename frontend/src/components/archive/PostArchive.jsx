import React from 'react';
import { Heading, Box, Flex, useMediaQuery } from "@chakra-ui/react";
import Posts from '../post/Posts';
import Pagination from '../helpers/Pagination';
import CoursePage from '../../pages/course/CoursePage'
import SemesterPage from '../../pages/semester/SemesterPage'
import Loading from "../helpers/Loading";
import NoPost from '../helpers/NoPost';

const PostArchive = ({ title, postData }) => {

    const posts = postData.data;
    const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)")

    return (
        <Flex>
            {isLargerThan1280 && <Box w="25%"><CoursePage /></Box>}

            <Box w={isLargerThan1280 ? "50%" : "100%"} boxShadow="2xl" m={6} p="6" rounded="md" bg="white">
                <Heading size="md" mb={2}>{title}</Heading>
                <hr />
                <Box mt={2}>
                    {postData.loading ? (
                        <Loading />
                    ) : (
                            <>
                                {posts.length > 0 ? <Posts posts={posts} /> : <NoPost />}
                            </>
                        )}
                </Box>

                {/* Pagination */}
                <Pagination postData={postData} />
            </Box>
            {isLargerThan1280 && <Box w="25%"><SemesterPage /></Box>}
        </Flex>
    )

}


export default PostArchive