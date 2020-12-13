import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getCourse } from "../../store/actions/courseActions";
import { Heading, Box } from "@chakra-ui/react";
import SinglePost from '../../components/SinglePost';


const IndividualCoursePage = (props) => {

    const courseId = props.match.params.courseId
    const courseCode = props.match.params.courseCode
    const courseTitle = props.match.params.courseTitle

    const dispatch = useDispatch()
    const course = useSelector(state => state.course)

    useEffect(() => {
        dispatch(getCourse(courseId))
    }, [dispatch, courseId])

    return (
        <Box boxShadow="2xl" m={6} p="6" rounded="md" bg="white">
            <Heading mb={2}>{courseTitle} - ({courseCode})</Heading>
            <hr />
            <Box mt={2}>
                {course.data.posts && course.data.posts.map(post => <SinglePost post={post} key={post.id} />)}
            </Box>
        </Box>
    )

}


export default IndividualCoursePage