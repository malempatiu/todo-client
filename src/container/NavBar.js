import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class NavBar extends Component {
    render() {
        const { currentUser } = this.props;
        return (
            <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
                <div className="container">
                    <h3 className="navbar-brand">To-Do List App</h3>
                    <div className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
                        <span className="navbar-toggler-icon"></span>
                    </div>
                    {currentUser.isAuthenticated ?
                        <div className="collapse navbar-collapse" id="navbarMenu">
                            <div className="navbar-nav ml-auto">
                                <Link className="nav-item nav-link" to="/">Log out</Link>
                            </div>
                        </div>
                        : <div className="collapse navbar-collapse" id="navbarMenu">
                            <div className="navbar-nav ml-auto">
                                <Link className="nav-item nav-link" to="/signup">Sign Up</Link>
                                <Link className="nav-item nav-link" to="/signin">Log In</Link>
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