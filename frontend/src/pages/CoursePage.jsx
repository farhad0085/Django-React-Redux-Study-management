import React, { useEffect } from 'react'
import { Tab, Row, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as actions from '../store/actions/semesterAction';
import { connect } from 'react-redux'

const CoursePage = ({ semesterData, loadSemesters }) => {
    console.log(semesterData);
    useEffect(() => {
        loadSemesters()
    }, [loadSemesters])

    return (
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#11">
            <Row>
                <Col sm={4}>
                    <ListGroup>
                        {semesterData.data && semesterData.data.map(semester => {
                            return (
                                <ListGroup.Item key={semester.code} action href={`#${semester.code}`}>
                                    {semester.full_name} ({semester.display_name})
                                </ListGroup.Item>
                            )
                        })}
                    </ListGroup>
                </Col>
                <Col sm={8}>
                    <Tab.Content>
                        <Tab.Pane eventKey="#11">
                            <h3>Courses of First year, First Semester</h3>
                            <ListGroup>
                                <ListGroup.Item action to="/courses/eee101" as={Link}>
                                    EEE 101
                                </ListGroup.Item>
                                <ListGroup.Item action to="/courses/mat101" as={Link}>
                                    MAT 101
                                </ListGroup.Item>
                                <ListGroup.Item action to="/courses/eng101" as={Link}>
                                    ENG 101
                                </ListGroup.Item>
                            </ListGroup>
                        </Tab.Pane>

                        <Tab.Pane eventKey="#12">
                            <h3>Courses of First year, Second Semester</h3>
                            <ListGroup>
                                <ListGroup.Item action to="/courses/eee101" as={Link}>
                                    EEE 101
                                </ListGroup.Item>
                                <ListGroup.Item action to="/courses/eee103" as={Link}>
                                    EEE 103
                                </ListGroup.Item>
                            </ListGroup>
                        </Tab.Pane>

                        <Tab.Pane eventKey="#21">
                            <h3>Courses of Second year, First Semester</h3>
                            <ListGroup>
                                <ListGroup.Item action to="/courses/eee101" as={Link}>
                                    EEE 101
                                </ListGroup.Item>
                                <ListGroup.Item action to="/courses/eee103" as={Link}>
                                    EEE 103
                                </ListGroup.Item>
                            </ListGroup>
                        </Tab.Pane>

                        <Tab.Pane eventKey="#22">
                            <h3>Courses of Second year, Second Semester</h3>
                            <ListGroup>
                                <ListGroup.Item action to="/courses/eee101" as={Link}>
                                    EEE 101
                                </ListGroup.Item>
                                <ListGroup.Item action to="/courses/eee103" as={Link}>
                                    EEE 103
                                </ListGroup.Item>
                            </ListGroup>
                        </Tab.Pane>

                        <Tab.Pane eventKey="#31">
                            <h3>Courses of Third year, First Semester</h3>
                            <ListGroup>
                                <ListGroup.Item action to="/courses/eee101" as={Link}>
                                    EEE 101
                                </ListGroup.Item>
                                <ListGroup.Item action to="/courses/eee103" as={Link}>
                                    EEE 103
                                </ListGroup.Item>
                            </ListGroup>
                        </Tab.Pane>

                        <Tab.Pane eventKey="#32">
                            <h3>Courses of Third year, Second Semester</h3>
                            <ListGroup>
                                <ListGroup.Item action to="/courses/eee101" as={Link}>
                                    EEE 101
                                </ListGroup.Item>
                                <ListGroup.Item action to="/courses/eee103" as={Link}>
                                    EEE 103
                                </ListGroup.Item>
                            </ListGroup>
                        </Tab.Pane>

                        <Tab.Pane eventKey="#41">
                            <h3>Courses of Fourth year, First Semester</h3>
                            <ListGroup>
                                <ListGroup.Item action to="/courses/eee101" as={Link}>
                                    EEE 101
                                </ListGroup.Item>
                                <ListGroup.Item action to="/courses/eee103" as={Link}>
                                    EEE 103
                                </ListGroup.Item>
                            </ListGroup>
                        </Tab.Pane>

                        <Tab.Pane eventKey="#42">
                            <h3>Courses of Forth year, First Semester</h3>
                            <ListGroup>
                                <ListGroup.Item action to="/courses/eee101" as={Link}>
                                    EEE 101
                                </ListGroup.Item>
                                <ListGroup.Item action to="/courses/eee103" as={Link}>
                                    EEE 103
                                </ListGroup.Item>
                            </ListGroup>
                        </Tab.Pane>

                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    )

}


const mapStateToProps = state => {
    return {
        semesterData: state.semester
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadSemesters: () => dispatch(actions.loadSemesters())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage)