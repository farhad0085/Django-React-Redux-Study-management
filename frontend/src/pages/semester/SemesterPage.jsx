import React, { useEffect } from 'react'
import { NavLink } from "react-router-dom";
import { loadSemesters } from '../../store/actions/semesterAction';
import { useDispatch, useSelector } from 'react-redux'
import { List, ListItem, ListIcon, Box } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import Title from '../../components/helpers/Title';


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
                    <Title title="Semesters" as="h2" />
                    <hr />
                    <List mt={2} spacing={3}>
                        {semesterData.data.map(semester => {
                            return (
                                <ListItem key={semester.full_name}>
                                    <ListIcon as={CheckCircleIcon} color="green.500" />
                                    <NavLink to={`/semesters/${semester.id}/${semester.full_name}/${semester.display_name}`}>
                                        {semester.full_name} - {semester.display_name}
                                    </NavLink>
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