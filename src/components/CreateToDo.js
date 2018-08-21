import React, { Component } from 'react';
import {connect} from 'react-redux';
import { createToDo } from '../store/actiongenerators/actions';

class CreateToDo extends Component {
    state = {
        text: ''
    };
    handleToDoInput = (e) => {
       this.setState({text: e.target.value});
    };
    handleCreateToDo = (e) => {
       e.preventDefault();
       const todoToDB = {text: this.state.text};
       this.props.createToDo(todoToDB);
       this.props.history.push('/gettodos');
    };
    render() {
        return (
            <div className="container create-todo-cont text-center">
               <h1 className="text-white">Create a new to-do</h1>
               <form onSubmit={this.handleCreateToDo}>
                  <div className="form-group">
                     <input type="text" className="form-control" placeholder="enter your to-do here" onChange={this.handleToDoInput} />
                  </div>
                  <div className="form-group">
                     <button type="submit" className="form-control btn btn-dark">Create To-Do</button>
                  </div>
               </form>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return{
      todos: state.todos
    };
};

export default connect(mapStateToProps, {createToDo})(CreateToDo);