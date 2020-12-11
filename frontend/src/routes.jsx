import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SemesterPage from './pages/SemesterPage'
import IndividualSemesterPage from './pages/IndividualSemesterPage'
import CoursePage from './pages/CoursePage'
import IndividualCoursePage from './pages/IndividualCoursePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

const routes = () => {


    return (
        <>
            <Route path="/" exact component={HomePage} />
            <Route path="/semesters" exact component={SemesterPage} />
            <Route path="/semesters/:semesterId" component={IndividualSemesterPage} />
            <Route path="/courses" exact component={CoursePage} />
            <Route path="/courses/:courseId" component={IndividualCoursePage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/register" exact component={RegisterPage} />
        </>
    )

}

export default routes