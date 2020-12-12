import React from 'react'
import { useDispatch } from "react-redux";
import { getCourse } from "../../store/actions/courseActions";

const IndividualCoursePage = (props) => {

    const courseId = props.match.params.courseId
    const courseCode = props.match.params.courseCode
    const courseTitle = props.match.params.courseTitle
    
    const dispatch = useDispatch()

    dispatch(getCourse(courseId))

    return (
        <>
            <h3 className="text-muted">{courseTitle} - ({courseCode})</h3>
            <hr/>
            Loading...
        </>
    )

}


export default IndividualCoursePage