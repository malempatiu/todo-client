import React, { Component } from 'react';
import { fetchTodos, removeTodo, updateTodo } from '../store/actiongenerators/actions';
import { connect } from 'react-redux';

class TodosList extends Component {
    componentDidMount() {
        this.props.fetchTodos();
    };
    handleDeleteTodo = (e) => {
        const todoID = e.target.value;
        this.props.removeTodo(todoID);
    };
    handleInputChecked = (e) => {
        const todoIdToUpdate = e.target.value;
        const isChecked = {
            completed: e.target.checked
        };
        this.props.updateTodo(todoIdToUpdate, isChecked);
    };
    render() {
        const { user } = this.props.currentUser;
        const { todos } = this.props.todos;
        return (
            <div className="todo-list-cont">
                <h1 className="text-center text-white"><span className="font-weight-bold text-info">{user.username}</span> todo's list</h1>
                {todos.length > 0 ?
                    <div className="container">
                        {todos.map((todo) => {
                            return <div key={todo._id} className="row todo-row">
                                <div className="col-md-12">
                                    <input type="checkbox" className="form-check-input todo-check-input" value={todo._id} onClick={this.handleInputChecked} />
                                    {todo.completed ?
                                        <p className="text-muted todo-text completed">{todo.text}</p>
                                        :
                                        <p className="text-white todo-text">{todo.text}</p>
                                    }
                                    <button className="btn btn-danger todo-delete-btn" value={todo._id} onClick={this.handleDeleteTodo}>X</button>
                                </div>
                            </div>
                        })}
                    </div>
                    :
                    <div className="container todo-row text-center text-danger">
                        <h3>You have no todo's to show</h3>
                    </div>
                }
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
        todos: state.todos,
        errors: state.errors
    }
}

export default connect(mapStateToProps, { fetchTodos, removeTodo, updateTodo })(TodosList);