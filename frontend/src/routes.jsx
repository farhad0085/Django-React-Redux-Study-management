import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SemesterPage from './pages/semester/SemesterPage'
import IndividualSemesterPage from './pages/semester/IndividualSemesterPage'
// import CoursePage from './pages/course/CoursePage'
import IndividualCoursePage from './pages/course/IndividualCoursePage'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import ForgetPasswordPage from './pages/auth/ForgetPasswordPage'
import CreateCourse from './pages/course/CreateCourse'
import LogoutPage from './pages/auth/LogoutPage'
import { useSelector } from 'react-redux'


const routes = () => {

    return (
        <>
            <Route path="/" exact component={HomePage} />
            <Route path="/semesters" exact component={SemesterPage} />
            <Route path="/semesters/:semesterId" component={IndividualSemesterPage} />
            {/* <Route path="/courses" exact component={CoursePage} /> */}
            <PrivateRoute path="/course/new" exact component={CreateCourse} />
            <Route path="/courses/:courseId/:courseCode/:courseTitle" component={IndividualCoursePage} />
            <GuestRoute path="/login" component={LoginPage} />
            <GuestRoute path="/register" component={RegisterPage} />
            <GuestRoute path="/forget-password" component={ForgetPasswordPage} />
            <PrivateRoute path="/logout" component={LogoutPage} />
        </>
    )

}

export default routes


const GuestRoute = ({ component: Component, ...rest }) => {

    const auth = useSelector(state => state.auth)

    return (
        <Route
            {...rest}

            render={props => (
                <>
                    {!auth.isAuthenticated ? <Component {...props} /> : (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: { from: props.location }
                            }}
                        />
                    )}
                </>
            )}
        />
    )

}

const PrivateRoute = ({ component: Component, ...rest }) => {

    const auth = useSelector(state => state.auth)

    return (
        <Route
            {...rest}

            render={props => (
                <>
                    {auth.isAuthenticated ? <Component {...props} /> : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: props.location }
                            }}
                        />
                    )}
                </>
            )}
        />
    )

}


