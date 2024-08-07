import axios from 'axios';

const API_BASE_URL = 'https://gorest.co.in/public/v2';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Authorization': `Bearer b884d53409a104c4415539ddd43e3320f50cd7afbb6c778f2812e288da48ac19`,
        'Content-Type': 'application/json',
    },
});

//Users
export const getUsers = () => api.get('/users');
export const getUser = (id) => api.get(`/users/${id}`);
export const createUser = (data) => api.post('/users',data);
export const updateUser = (id, data) => api.put(`/users/${id}`,data); 
export const deleteUser = (id) => api.delete(`/users/${id}`);

//Posts
export const getAllPosts = () => api.get('/posts');
export const getUserPosts =(id) => api.get(`/users/${id}/posts`);
export const createUserPost = (id, post) => api.post(`/users/${id}/posts`,post); 

//Comments
export const getAllComments = () => api.get('/comments');
export const getUserComments =(id) => api.get(`/posts/${id}/comments`);
export const createPostComment = (id, comment) => api.post(`/posts/${id}/comments`, comment);

//todo
export const getAllToDos = () => api.get('/todos');
export const getUserToDos = (id) => api.get(`/users/${id}/todos`);
export const createUserToDo = (id,todo) => api.post(`/users/${id}/todos`,todo);