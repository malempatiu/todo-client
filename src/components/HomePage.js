import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logoutUser } from '../store/actiongenerators/actions';
import { connect } from 'react-redux';

class HomePage extends Component {
    componentDidMount() {
        this.props.logoutUser();
    };
    render() {
        return (
            <div className="container home-page-cont text-center">
                <div className="jumbotron">
                    <i className="far fa-list-alt fa-3x"></i> 
                    <h1 className="text-white">Welcome to Todo List</h1>
                    <p className="lead">Add your daily todo's</p>
                    <Link to="/signup" className="btn btn-warning">Sign up here!</Link>
                </div>
            </div>
        );
    };
};

export default connect(null, { logoutUser })(HomePage);