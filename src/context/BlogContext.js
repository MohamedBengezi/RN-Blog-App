import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

// This allows parent elements to pass information directly to farther children
const blogReducer = (state, action) => {
    //state object and the change to make to it. 
    switch (action.type) {
        case 'edit':
            return state.map((blogPost) => {
                return (blogPost.id == action.payload.id) ? action.payload : blogPost
            })
        case 'delete':
            return state.filter((blogPost) => blogPost.id !== action.payload);
        case 'get':
            return action.payload;
        default:
            return state;
    }
}

const getBlogPosts = dispatch => {
    return async () => {
        const resp = await jsonServer.get('/blogPosts');
        dispatch({ type: 'get', payload: resp.data });
    };
};

const addBlogPost = dispatch => {
    return async (title, content, callback) => {
        await jsonServer.post('/blogPosts', { title, content });
        if (callback) callback()
    };
};

const deleteBlogPost = dispatch => {
    return async (id) => {
        await jsonServer.delete(`/blogPosts/${id}`);
        dispatch({ type: 'delete', payload: id });
    };
};

const editBlogPost = dispatch => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogPosts/${id}`, { title, content })
        dispatch({ type: 'edit', payload: { id, title, content } });
        callback();
    };
};

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
    []
);