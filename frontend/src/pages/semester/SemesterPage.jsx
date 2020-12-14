import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { loadSemesters } from '../../store/actions/semesterAction';
import { useDispatch, useSelector } from 'react-redux'
import { Heading, List, ListItem, ListIcon, Box } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";


const SemesterPage = () => {

    const dispatch = useDispatch()
    const semesterData = useSelector(state => state.semester)

    useEffect(() => {
        dispatch(loadSemesters())
    }, [dispatch])

    return (
        <>
            { semesterData.data.length > 0 && (
                <Box boxShadow="2xl" m={6} p="6" rounded="md" bg="white">
                    <Heading as="h2" size="md" mb={2}>All Semesters</Heading>
                    <hr />
                    <List mt={2} spacing={3}>
                        {semesterData.data.map(semester => {
                            return (
                                <ListItem key={semester.full_name}>
                                    <ListIcon as={CheckCircleIcon} color="green.500" />
                                    <Link to={`/semesters/${semester.id}/${semester.full_name}/${semester.display_name}`}>
                                        {semester.full_name} - {semester.display_name}
                                    </Link>
                                </ListItem>
                            )
                        }
                        )}
                    </List>


                </Box>
            )}
        </>
    )

}

export default SemesterPage