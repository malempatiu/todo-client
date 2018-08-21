import { GET_TODOS, ADD_TODO } from '../actiongenerators/action-types';

const todoInitialState = {
    todos: []
};
const todoReducer = (state = todoInitialState, action) => {
    switch (action.type) {
        case GET_TODOS:
            return {...state, todos: action.todos};
        case ADD_TODO:
            return {...state, todos: [...state.todos, action.todo]};
        default:
            return state;
    }
};

export default todoReducer;