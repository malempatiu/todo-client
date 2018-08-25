import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {logoutUser} from '../store/actiongenerators/actions';
import {connect} from 'react-redux';

    class HomePage extends Component {
        componentDidMount(){
          this.props.logoutUser();
        };
        render() {
            return (
                <div className="container text-center homepage-cont">
                    <h1 className="text-white">Welcome to To-Do App</h1>
                    <Link to="/signup" className="btn btn-warning">Sign up here!</Link>
                </div>
            );
        };
    };

export default connect(null, {logoutUser})(HomePage);