import React, { useState, useEffect } from 'react'
import BaseFormCard from "../../components/BaseFormCard";
import { useSelector, useDispatch } from 'react-redux'
import { getAllCourse } from '../../store/actions/courseActions'
import { loadSemesters } from '../../store/actions/semesterAction'
import SubmitButton from '../../components/helpers/SubmitButton'
import FormField from '../../components/helpers/FormField'
import DismissableAlert from '../../components/helpers/DismissableAlert'
import { createPost } from "../../store/actions/postActions";
import Loading from '../../components/helpers/Loading';

const CreatePost = () => {

    const dispatch = useDispatch()

    const courseData = useSelector(state => state.course)
    const semesterData = useSelector(state => state.semester)
    const postData = useSelector(state => state.post)

    const [semester, setSemester] = useState(1)
    const [course, setCourse] = useState(1)
    const [body, setBody] = useState("")

    useEffect(() => {
        dispatch(loadSemesters())
        dispatch(getAllCourse())
    }, [dispatch])

    const submitHandler = e => {
        e.preventDefault()

        const data = {
            semester,
            course,
            body
        }

        dispatch(createPost(data))

        if (Object.keys(courseData.errors).length === 0) {
            e.target.reset()
            setSemester(1)
        }
    }


    return (
        <BaseFormCard title="Upload materials">
            <form onSubmit={submitHandler}>
                <FormField
                    id="body"
                    label="Comments (optional)"
                    type="textarea"
                    placeholder="Write something about the upload..."
                    value={body}
                    isInvalid={!!postData.errors.body}
                    onChange={setBody}
                    errorMsg={postData.errors.body && postData.errors.body[0]}
                />

                {courseData.data.length > 0 ? (
                    <FormField
                        id="semester"
                        label="Semester"
                        type="select"
                        value={semester.id}
                        isInvalid={!!postData.errors.semester}
                        onChange={setSemester}
                        errorMsg={postData.errors.semester && postData.errors.semester[0]}
                    >
                        {semesterData.data.map(semester => <option key={semester.id} value={semester.id}>{semester.full_name}</option>)}
                    </FormField>
                ) : <Loading skeleton height="20px" />}

                {courseData.data.length > 0 ? (
                    <FormField
                        id="course"
                        label="Course"
                        type="select"
                        value={course.id}
                        isInvalid={!!postData.errors.course}
                        onChange={setCourse}
                        errorMsg={postData.errors.course && postData.errors.course[0]}
                    >
                        {courseData.data.map(course => <option key={course.id} value={course.id}>{course.title}</option>)}
                    </FormField>
                ) : <Loading skeleton height="20px" />}

                <SubmitButton title="Create Course" />
            </form>
            {courseData.created && <DismissableAlert mt={2} text="Course created successfully." type="success" />}
        </BaseFormCard>
    )

}


export default CreatePost
