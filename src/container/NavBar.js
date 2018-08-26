import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class NavBar extends Component {
    render() {
        const { currentUser } = this.props;
        return (
            <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
                <div className="container">
                    <h1 className="navbar-brand font-weight-bold"><i className="far fa-list-alt"></i> Todo List</h1>
                    <div className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
                        <span className="navbar-toggler-icon"></span>
                    </div>
                    {currentUser.isAuthenticated ?
                        <div className="collapse navbar-collapse" id="navbarMenu">
                            <div className="navbar-nav ml-auto">
                                <Link className="nav-item nav-link btn btn-info text-white" to="/addtodo">Add a new todo</Link>
                                <Link className="nav-item nav-link btn btn-warning text-white" to="/">Log out</Link>
                            </div>
                        </div>
                        : <div className="collapse navbar-collapse" id="navbarMenu">
                            <div className="navbar-nav ml-auto">
                                <Link className="nav-item nav-link btn btn-info text-white" to="/signup">Sign Up</Link>
                                <Link className="nav-item nav-link btn btn-info text-white" to="/signin">Log In</Link>
                            </div>
                        </div>
                    }
                </div>
            </nav>
        );
    };
};

const mapSateToProps = (state) => {
    return {
        currentUser: state.currentUser
    };
};

export default connect(mapSateToProps, null)(NavBar);