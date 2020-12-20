import React, { useEffect } from 'react'
import { NavLink } from "react-router-dom";
import { loadSemesters } from '../../store/actions/semesterAction';
import { useDispatch, useSelector } from 'react-redux'
import { List, ListItem, ListIcon, Box } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import Title from '../../components/helpers/Title';


const CoursePage = () => {

    const dispatch = useDispatch()
    const semesterData = useSelector(state => state.semester)

    useEffect(() => {
        dispatch(loadSemesters())
    }, [dispatch])

    return (
        <>
            { semesterData.data.length > 0 && (
                <>
                    {semesterData.data.map(semester => {
                        return (
                            <Box key={semester.id} boxShadow="2xl" m={6} p="6" rounded="md" bg="white">
                                <Title title={`Courses of ${semester.full_name} (${semester.display_name})`} as="h2" />
                                <hr />
                                <List mt={2} spacing={3}>
                                    {semester.courses.map(course => {
                                        return (
                                            <ListItem key={course.course_code}>
                                                <ListIcon as={CheckCircleIcon} color="green.500" />
                                                <NavLink to={`/courses/${course.id}/${course.course_code}/${course.title}`}>
                                                    {course.course_code} - {course.title}
                                                </NavLink>
                                            </ListItem>
                                        )
                                    })}
                                </List>
                            </Box>
                        )
                    }
                    )}
                </>
            )}
        </>
    )

}

export default CoursePage