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
import DragDropUpload from '../../components/helpers/DragDropUpload';

const CreatePost = () => {

    const dispatch = useDispatch()

    const courseData = useSelector(state => state.course)
    const semesterData = useSelector(state => state.semester)
    const postData = useSelector(state => state.post)

    const [semester, setSemester] = useState(1)
    const [course, setCourse] = useState(1)
    const [courses, setCourses] = useState([])
    const [body, setBody] = useState("")
    const [postType, setPostType] = useState("book"); // options -> book, question, classNote
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [uploadedFileError, setUploadedFileError] = useState("");
    const fileTypes = {
        question: 'image/jpeg, image/png, image/webp',
        book: 'application/pdf',
        classNote: 'application/pdf'
    }

    useEffect(() => {
        dispatch(loadSemesters())
        dispatch(getAllCourse())
    }, [dispatch])

    useEffect(() => {
        if (uploadedFiles.length !== 0) setUploadedFileError("")
    }, [uploadedFiles])

    const submitHandler = e => {
        e.preventDefault()

        if (uploadedFiles.length === 0) return setUploadedFileError("Please select some attachments!")
        else setUploadedFileError("")

        const data = {
            uploadedFiles,
            semester,
            course,
            body,
            postType
        }

        dispatch(createPost(data))


        if (Object.keys(postData.errors).length === 0) {
            setBody("")
            setPostType("book")
            setSemester(1)
            setCourse(1)

        }
    }

    useEffect(() => {
        semesterChangeHandler(1)
        // eslint-disable-next-line
    }, [courseData])

    const semesterChangeHandler = value => {
        // set semester first
        value = parseInt(value)
        setSemester(value);

        const allCourse = courseData.data.length > 0 ? courseData.data : [];
        setCourses(allCourse.filter(course => course.semester === value))
    }

    return (
        <BaseFormCard title="Upload materials">
            <form onSubmit={submitHandler}>

                <FormField
                    id="semester"
                    label="Type"
                    type="select"
                    value={postType}
                    onChange={setPostType}
                >
                    <option value={'book'}>Book</option>
                    <option value={'classNote'}>Class Note</option>
                    <option value={'question'}>Question</option>
                </FormField>

                <DragDropUpload
                    onChange={setUploadedFiles}
                    allowedFileType={fileTypes[postType]}
                    postType={postType}
                    error={uploadedFileError}
                />

                {semesterData.data.length > 0 ? (
                    <FormField
                        id="semester"
                        label="Semester"
                        type="select"
                        value={semester}
                        isInvalid={!!postData.errors.semester}
                        onChange={semesterChangeHandler}
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
                        value={course}
                        isInvalid={!!postData.errors.course}
                        onChange={setCourse}
                        errorMsg={postData.errors.course && postData.errors.course[0]}
                    >
                        {courses.map(course => <option key={course.id} value={course.id}>{course.title}</option>)}
                    </FormField>
                ) : <Loading skeleton height="20px" />}

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

                <SubmitButton isLoading={postData.createLoading} loadingText="Posting..." title="Submit" />
            </form>
            {postData.created && <DismissableAlert mt={2} text="Your materials uploaded successfully." type="success" />}
        </BaseFormCard>
    )

}


export default CreatePost
