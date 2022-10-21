import axios from "axios";
import { fetchApi, deletePost, showOne } from "../../slices/posts"

export const getAllPosts = () => (dispatch) =>{
        axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(res => dispatch(fetchApi(res.data)))
        .catch(error => console.log(error))
}


export const deleteCard = (id) => (dispatch) =>{
    dispatch(deletePost(id))
}

export const showOneCard = (id) => (dispatch) =>{
    dispatch(showOne(id))
}

