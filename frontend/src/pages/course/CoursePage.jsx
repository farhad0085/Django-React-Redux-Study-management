import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { loadSemesters } from '../../store/actions/semesterAction';
import { useDispatch, useSelector } from 'react-redux'
import { Tabs, Heading, TabPanel, TabList, TabPanels, Tab, List, ListItem, ListIcon, Box } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";


const CoursePage = () => {


    const dispatch = useDispatch()
    const semesterData = useSelector(state => state.semester)

    useEffect(() => {
        dispatch(loadSemesters())
    }, [dispatch])

    return (
        <>
            { semesterData.data.length > 0 && (
                <Tabs isFitted variant="soft-rounded">
                    <TabList mb="1em">
                        {semesterData.data.map(semester => {
                            return (
                                <Tab key={semester.code}>
                                    {semester.full_name} ({semester.display_name})
                                </Tab>
                            )
                        })}
                    </TabList>
                    <TabPanels>
                        {semesterData.data.map(semester => {
                            return (
                                <TabPanel key={semester.code} eventKey={`#${semester.code}`}>

                                    <Box boxShadow="2xl" m={6} p="6" rounded="md" bg="white">
                                        <Heading as="h2" size="md" mb={2}>Courses of {semester.full_name} ({semester.display_name})</Heading>
                                        <hr />
                                        <List mt={2} spacing={3}>
                                            {semester.courses.map(course => {
                                                return (
                                                    <ListItem key={course.course_code}>
                                                        <ListIcon as={CheckCircleIcon} color="green.500" />
                                                        <Link to={`/courses/${course.id}/${course.course_code}/${course.title}`}>
                                                            {course.course_code} - {course.title}
                                                        </Link>
                                                    </ListItem>
                                                )
                                            })}
                                        </List>
                                    </Box>
                                </TabPanel>
                            )
                        }
                        )}
                    </TabPanels>
                </Tabs>
            )}
        </>
    )

}

export default CoursePage