import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from '../store/actions/postActions';
import PostArchive from '../components/archive/PostArchive'


const HomePage = () => {

    const dispatch = useDispatch()
    const post = useSelector(state => state.post)
    
    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch])

    return (
        <PostArchive postData={post} title="Latest Updates" />
    )

}


export default HomePage