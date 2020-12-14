import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../store/actions/postActions";
import PostArchive from '../../components/archive/PostArchive';


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
        <PostArchive posts={post.data} title={`Updates from - ${courseTitle} - (${courseCode})`} />
    )

}


export default IndividualCoursePage