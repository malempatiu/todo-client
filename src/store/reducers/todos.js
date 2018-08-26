import { GET_TODOS, ADD_TODO, DELETE_TODO, UPDATE_TODO } from '../actiongenerators/action-constants';

const initialTodos = {
    todos: []
};
const todos = (state = initialTodos, action) => {
    switch (action.type) {
        case GET_TODOS:
            return {
                ...state,
                todos: action.todos
            };
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.todo]
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: [...state.todos.filter((todo) => {
                    return todo._id !== action.removedTodo._id;
                })]
            };
        case UPDATE_TODO:
            state.todos.forEach((todo) => {
                if (todo._id === action.updatedTodo._id) {
                    todo.completed = action.updatedTodo.completed
                };
            });
            return {
               todos: [...state.todos]
            };
        default:
            return state;
    }
};

export default todos;
