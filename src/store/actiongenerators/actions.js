import {GET_TODOS, ADD_TODO} from './action-types';

const getTodos = (todos) => {
    return {
        type: GET_TODOS,
        todos
    };
};

const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        todo
    };
};

export const fetchToDos = () => {
    return (dispatch) => {
        return fetch('http://localhost:8081/api/todos')
        .then((response) => response.json())
        .then((data) => {
            dispatch(getTodos(data.todos));
        })
        .catch((err) => console.log(err));
    };
};

export const createToDo = (todoToAdd) => {
    return (dispatch) => {
        return fetch('http://localhost:8081/api/todos', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(todoToAdd)
        })
        .then((response) => response.json())
        .then((data) => {
            dispatch(addTodo(data.todo));
        })
        .catch((err) => console.log(err));
    };
};