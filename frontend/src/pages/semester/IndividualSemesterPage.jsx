import React from 'react'


const IndividualSemesterPage = (props) => {

    const semesterId = props.match.params.semesterId

    return (
        <h1>Semester {semesterId}</h1>
    )

}


export default IndividualSemesterPage