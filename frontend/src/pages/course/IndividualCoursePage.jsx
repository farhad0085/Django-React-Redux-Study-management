import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../store/actions/postActions";
import { Heading, Box } from "@chakra-ui/react";
import Posts from '../../components/post/Posts';


const IndividualCoursePage = (props) => {

    const courseId = props.match.params.courseId
    const courseCode = props.match.params.courseCode
    const courseTitle = props.match.params.courseTitle

    const dispatch = useDispatch()
    const post = useSelector(state => state.post)

    useEffect(() => {
        dispatch(getAllPosts({course: courseId}))
    }, [dispatch, courseId])

    return (
        <Box boxShadow="2xl" m={6} p="6" rounded="md" bg="white">
            <Heading mb={2}>{courseTitle} - ({courseCode})</Heading>
            <hr />
            <Box mt={2}>
                {post.data.length > 0 && <Posts posts={post.data} />}
            </Box>
        </Box>
    )

}


export default IndividualCoursePage