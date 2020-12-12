import React, { useEffect } from 'react'
import { Tab, Row, Col, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as actions from '../../store/actions/semesterAction';
import { connect } from 'react-redux'

const CoursePage = ({ semesterData, loadSemesters }) => {
    useEffect(() => {
        loadSemesters()
    }, [loadSemesters])

    return (
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#11">
            <Row>
                <Col sm={4}>
                    {semesterData.data.length > 0 ? (
                        <ListGroup>
                            { semesterData.data.map(semester => {
                                return (
                                    <ListGroup.Item key={semester.code} action href={`#${semester.code}`}>
                                        {semester.full_name} ({semester.display_name})
                                    </ListGroup.Item>
                                )
                            })}
                        </ListGroup>
                    ) : "Loading..."}

                </Col>
                <Col sm={8}>
                    <Button className="mb-2" as={Link} to="/course/new" block>Create Course</Button>
                    {semesterData.data.length > 0 ? (
                        <Tab.Content>
                            {semesterData.data.map(semester => {
                                return (
                                    <Tab.Pane key={semester.code} eventKey={`#${semester.code}`}>
                                        <h3 className="text-muted">Courses of {semester.full_name} ({semester.display_name})</h3>
                                        <ListGroup>
                                            {semester.courses.map(course => {
                                                return (
                                                    <ListGroup.Item key={course.course_code} action to={`/courses/${course.id}/${course.course_code}/${course.title}`} as={Link}>
                                                        {course.course_code} - {course.title}
                                                    </ListGroup.Item>
                                                )
                                            })}

                                        </ListGroup>
                                    </Tab.Pane>
                                )
                            }
                            )}
                        </Tab.Content>
                    ) : "Loading"}
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