import React from 'react'


const IndividualCoursePage = (props) => {

    const courseId = props.match.params.courseId

    return (
        <h1>Course {courseId}</h1>
    )

}


export default IndividualCoursePage