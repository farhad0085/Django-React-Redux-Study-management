import React, { useState } from 'react'
import BaseFormCard from '../../components/BaseFormCard'
import { Form, Button, Alert } from "react-bootstrap";
import { connect } from 'react-redux'
import * as actions from '../../store/actions/courseActions'


const CreateCourse = ({ courseData, createCourse }) => {

    const [code, setCode] = useState("")
    const [title, setTitle] = useState("")
    const [semester, setSemester] = useState("")
    const [show, setShow] = useState(true)

    const submitHandler = e => {
        e.preventDefault()

        const data = {
            course_code: code,
            title: title,
            semester: semester
        }

        createCourse(data)

        if (Object.keys(courseData.errors).length === 0) {
            e.target.reset()
            setCode("")
            setTitle("")
            setSemester("")
            setShow(true)
        }
    }

    return (
        <BaseFormCard title="Create Course">
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="formBasicCode">
                    <Form.Label>Course Code</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="EEE101"
                        value={code}
                        isInvalid={!!courseData.errors.course_code}
                        onChange={(e) => setCode(e.target.value)}
                    />
                    {courseData.errors.course_code && <Form.Control.Feedback type="invalid">{courseData.errors.course_code[0]}</Form.Control.Feedback>}

                </Form.Group>
                <Form.Group controlId="formBasicTitle">
                    <Form.Label>Course Title</Form.Label>
                    <Form.Control
                        type="text"
                        value={title}
                        isInvalid={!!courseData.errors.title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Fundamentals of Electrical Circuit I"
                    />
                    {courseData.errors.title && <Form.Control.Feedback type="invalid">{courseData.errors.title[0]}</Form.Control.Feedback>}
                </Form.Group>
                <Form.Group controlId="formBasicSemester">
                    <Form.Label>Semester</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="1/1"
                        value={semester}
                        isInvalid={!!courseData.errors.semester}
                        onChange={(e) => setSemester(e.target.value)}
                    />
                    {courseData.errors.semester && <Form.Control.Feedback type="invalid">{courseData.errors.semester[0]}</Form.Control.Feedback>}
                </Form.Group>
                <Button variant="primary" block type="submit">
                    Create Course
                </Button>
            </Form>
            {courseData.created && show && (
                    <Alert
                        onClose={() => setShow(false)}
                        dismissible
                        variant="success"
                        className="mt-2"
                    >
                        Course created successfully.
                    </Alert>
            )}
        </BaseFormCard>
    )

}

const mapStateToProps = state => {
    return {
        courseData: state.course
    }
}


const mapDispatchToProps = dispatch => {
    return {
        createCourse: (courseData) => dispatch(actions.createCourse(courseData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCourse)