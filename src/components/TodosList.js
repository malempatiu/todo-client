import React, { Component } from 'react';
import {fetchTodos} from '../store/actiongenerators/actions';
import {connect} from 'react-redux';

class TodosList extends Component {
    componentDidMount(){
       this.props.fetchTodos();
    };
    render() {
        return (
            <div className="container">
                <h1 className="text-center text-white">your todo's List</h1>
            </div>
        );
    }
};

export default connect(null, {fetchTodos})(TodosList);