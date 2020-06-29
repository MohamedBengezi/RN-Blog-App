import createDataContext from './createDataContext';

// This allows parent elements to pass information directly to farther children

const blogReducer = (state, action) => {
    //state object and the change to make to it. 
    switch (action.type) {
        case 'add':
            return [...state, { id: Math.floor(Math.random() * 99999), title: action.payload.title, content: action.payload.content }];
        case 'edit':
            return state.map((blogPost) => {
                return (blogPost.id == action.payload.id) ? action.payload : blogPost
            })
        case 'delete':
            return state.filter((blogPost) => blogPost.id !== action.payload);
        default:
            return state;
    }
}

const addBlogPost = dispatch => {
    return (title, content, callback) => {
        dispatch({ type: 'add', payload: { title, content } });
        callback();
    };
};

const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({ type: 'delete', payload: id });
    };
};

const editBlogPost = dispatch => {
    return (id, title, content, callback) => {
        dispatch({ type: 'edit', payload: { id, title, content } });
        callback();
    };
};

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost, editBlogPost }, [{ id: 1, title: 'TEST', content: 'test' }]);