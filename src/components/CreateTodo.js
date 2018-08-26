import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTodo } from '../store/actiongenerators/actions';

class CreateTodo extends Component {
    state = {
        text: '',
        error: null
    };
    handleNewTodo = (e) => {
        this.setState({text: e.target.value});
    };
    handleFormSubmit = (e) => {
      e.preventDefault();
      if(this.state.text.length >= 2){
          const todo = {
             text: this.state.text
          };
          this.props.createTodo(todo);
          this.props.history.push('/todoslist');
      }else {
          this.setState({error: "Todo should not be empty"});
      }
    };
    render() {
        return (
            <div className="container authform-cont">
                <h1 className="text-center text-white">Create a new todo</h1>
                {this.state.error && <div className="alert alert-danger">{this.state.error}</div>}
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <form onSubmit={this.handleFormSubmit}>
                            <div className="form-group">
                                <label className="font-weight-bold" htmlFor="newTodo">New Todo:</label>
                                <input type="text" className="form-control" id="newTodo" onChange={this.handleNewTodo} />
                            </div>
                            <div className="form-group text-center">
                                <button type="submit" className="btn btn-primary form-control">Create a todo</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
};

export default connect(null, { createTodo })(CreateTodo);