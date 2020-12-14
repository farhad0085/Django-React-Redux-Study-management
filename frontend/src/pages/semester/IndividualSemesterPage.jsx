import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import PostArchive from '../../components/archive/PostArchive';
import { getAllPosts } from "../../store/actions/postActions";

const IndividualSemesterPage = (props) => {

    const semesterId = props.match.params.semesterId
    const semesterTitle = props.match.params.semesterTitle

    const dispatch = useDispatch()
    const post = useSelector(state => state.post)

    useEffect(() => {
        dispatch(getAllPosts({semester: semesterId}))
    }, [dispatch, semesterId])

    return (
        <PostArchive posts={post.data} title={`Updates from - ${semesterTitle}`} />
    )

}


export default IndividualSemesterPage