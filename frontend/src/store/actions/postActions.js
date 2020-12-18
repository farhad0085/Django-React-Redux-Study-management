import axios from '../../utils/axios';
import * as Types from './actionTypes';
import { getHeaders, removeEndSign, buildFilter } from "../../utils";

export const getAllPosts = (filters) => dispatch => {
    
    dispatch({type: Types.POST_DATA_LOADING, payload: true})
    dispatch({type: Types.POST_CREATED, payload: false })

    const filter = removeEndSign(buildFilter(filters))

    axios.get(`/posts/${filter}`)
    .then(res => {
        dispatch({type: Types.POST_DATA_LOADED, payload: res.data })
        dispatch({type: Types.POST_DATA_LOADING, payload: false})
    })
    .catch(error => {
        dispatch({type: Types.POST_DATA_LOAD_ERROR, payload: error.response.data })
        dispatch({type: Types.POST_DATA_LOADING, payload: false})
    })

}

export const createPost = (postData) => dispatch => {

    const { postType, course, semester, uploadedFiles } = postData;

    dispatch({type: Types.POST_CREATE_LOADING, payload: true })
    dispatch({type: Types.POST_CREATED, payload: false })

    if (postType === 'book'){
    
        const requestArray = [];
        const books = uploadedFiles;

        books.forEach(book => {
            const form_data = new FormData();
            form_data.append('book', book, book.name);
            form_data.append('title', book.name);
            form_data.append('course', course);
            form_data.append('semester', semester);
    
            requestArray.push(axios.post("/books/", form_data, {headers: getHeaders({'content-type': 'multipart/form-data'})}))
        })


        Promise.all(requestArray)
            .then((responses)=>{

                // now create the post
                axios.post("/posts/", { course, semester, books: responses.map(res => res.data.id) }, {headers: getHeaders()})
                    .then(res => {
                        dispatch({type: Types.POST_CREATED, payload: res.data })
                        dispatch({type: Types.POST_CREATE_LOADING, payload: false })
                    })
                    .catch(error => {
                        dispatch({type: Types.POST_CREATE_ERROR, payload: error.response.data })
                        dispatch({type: Types.POST_CREATE_LOADING, payload: false })
                    })

            })
            .catch((err) => {
                console.log("All error", err);
            });

    }
    else if (postType === 'question'){
        
    }
    
}


export const loadPage = (filters, page="next") => (dispatch, getState) => {
    dispatch({type: Types.POST_DATA_LOADING, payload: true})
    dispatch({type: Types.POST_CREATED, payload: false })

    const prevState = getState().post

    const filter = removeEndSign(buildFilter(filters))

    axios.get(`${prevState[page]}${filter}`)
    .then(res => {
        dispatch({type: Types.POST_DATA_LOADED, payload: res.data })
        dispatch({type: Types.POST_DATA_LOADING, payload: false})
    })
    .catch(error => {
        dispatch({type: Types.POST_DATA_LOAD_ERROR, payload: error.response.data })
        dispatch({type: Types.POST_DATA_LOADING, payload: false})
    })

}
