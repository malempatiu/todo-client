import React, { Component } from 'react';
import {connect} from 'react-redux';
import {userAuthentication} from '../store/actiongenerators/actions';
import {Redirect} from 'react-router-dom';

class AuthForm extends Component {
    state = {
        email: '',
        username: '',
        password: ''
    };
    handleEmail = (e) => {
        this.setState({ email: e.target.value });
    };
    handlePassword = (e) => {
        this.setState({ password: e.target.value });
    };
    handleUsername = (e) => {
        this.setState({username: e.target.value});
    };
    handleFormSubmit = (e) => {
        e.preventDefault();
        const {signUp, userAuthentication} = this.props;
        const authType = signUp ? 'signup' : 'signin';
        userAuthentication(authType, this.state);
        document.getElementById('auth-form').reset();
    };
    render() {
        const {isAuthenticated} = this.props.currentUser;
        if(isAuthenticated){
            return <Redirect to="/todoslist"/>
        }
        const { signUp, btnText, heading, errors } = this.props;
        return (
            <div>
                <div className="container authform-cont">
                    <h1 className="text-center text-white">{heading}</h1>
                    {errors.error && <div className="alert alert-danger">{errors.error}</div>}
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <form id="auth-form" onSubmit={this.handleFormSubmit}>
                                <div className="form-group">
                                    <label className="font-weight-bold" htmlFor="email">Email:</label>
                                    <input type="text" className="form-control" id="email" onChange={this.handleEmail} />
                                </div>
                                <div className="form-group">
                                    <label className="font-weight-bold" htmlFor="password">Password:</label>
                                    <input type="password" className="form-control" id="password" onChange={this.handlePassword} />
                                </div>
                                {signUp && (
                                    <div className="form-group">
                                        <label className="font-weight-bold" htmlFor="username">Username:</label>
                                        <input type="text" className="form-control" id="username" onChange={this.handleUsername} />
                                    </div>
                                )}
                                <div className="form-group text-center">
                                    <button type="submit" className="btn btn-primary form-control">{btnText}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
        errors: state.errors
    };
};

export default connect(mapStateToProps, {userAuthentication})(AuthForm);