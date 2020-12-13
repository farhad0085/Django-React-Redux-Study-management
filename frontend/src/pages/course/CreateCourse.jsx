import React, { useState, useEffect } from 'react'
import BaseFormCard from '../../components/BaseFormCard'
import { useSelector, useDispatch } from 'react-redux'
import { createCourse } from '../../store/actions/courseActions'
import { loadSemesters } from '../../store/actions/semesterAction'
import SubmitButton from '../../components/helpers/SubmitButton'
import FormField from '../../components/helpers/FormField'
import DismissableAlert from '../../components/helpers/DismissableAlert'


const CreateCourse = () => {

    const dispatch = useDispatch()

    const courseData = useSelector(state => state.course)
    const semesterData = useSelector(state => state.semester)

    const [code, setCode] = useState("")
    const [title, setTitle] = useState("")
    const [semester, setSemester] = useState(1)

    useEffect(() => {
        dispatch(loadSemesters())
    }, [dispatch])

    const submitHandler = e => {
        e.preventDefault()

        const data = {
            course_code: code,
            title: title,
            semester: semester
        }

        dispatch(createCourse(data))

        if (Object.keys(courseData.errors).length === 0) {
            e.target.reset()
            setCode("")
            setTitle("")
            setSemester(1)
        }
    }

    return (
        <BaseFormCard title="Create Course">
            <form onSubmit={submitHandler}>
                <FormField
                    id="courseCode"
                    label="Course Code"
                    type="text"
                    placeholder="EEE101"
                    value={code}
                    isInvalid={!!courseData.errors.course_code}
                    // isInvalid={true}
                    onChange={setCode}
                    errorMsg={courseData.errors.course_code && courseData.errors.course_code[0]}
                // errorMsg="Something is wrong"
                />
                <FormField
                    id="courseTitle"
                    label="Course Title"
                    type="text"
                    placeholder="Fundamentals of Electrical Circuit I"
                    value={title}
                    isInvalid={!!courseData.errors.title}
                    onChange={setTitle}
                    errorMsg={courseData.errors.title && courseData.errors.title[0]}
                />
                <FormField
                    id="semester"
                    label="Semester"
                    type="select"
                    value={semester.id}
                    isInvalid={!!courseData.errors.semester}
                    onChange={setSemester}
                    errorMsg={courseData.errors.semester && courseData.errors.semester[0]}
                >
                    {semesterData.data.map(semester => <option key={semester.id} value={semester.id}>{semester.full_name}</option>)}
                </FormField>

                <SubmitButton title="Create Course" />
            </form>
            {courseData.created && <DismissableAlert mt={2} text="Course created successfully." type="success" />}
        </BaseFormCard>
    )

}


export default CreateCourse