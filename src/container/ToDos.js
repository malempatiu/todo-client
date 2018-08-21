import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchToDos} from '../store/actiongenerators/actions';


class ToDos extends Component{
    componentDidMount() {
        this.props.fetchToDos();
    };
    render(){
        const {todos} = this.props;
        return (
          <div className="container todos-cont">
              <h1 className="text-center text-white">List of Todos</h1>
              {todos.map((todo) => {
                  return <div key={todo._id} className="container todo-row-cont">
                       <div className="row">
                           <div className="col-lg-12 col-md-12 col-sm-12">
                              <p className="todo-text">{todo.text}</p>
                              <button className="btn btn-danger">X</button>
                           </div>
                       </div>
                  </div>
              })}
              <div className="row text-center">
                 <div className="col-lg-12 col-md-12 col-sm-12">
                    <Link className="btn btn-dark" to="/createtodo">Add New To-Do</Link>
                 </div>
              </div>
          </div>
        );
    };
};

const mapStateToProps = (state) => {
   return {
      todos: state.todos
   };
};

export default connect(mapStateToProps, {fetchToDos})(ToDos);