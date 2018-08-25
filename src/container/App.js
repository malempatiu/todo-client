import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import HomePage from '../components/HomePage';
import NavBar from './NavBar';
import AuthForm from '../components/AuthForm';
import { combineReducers ,createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import currentUser from '../store/reducers/currentUser';
import {setCurrentUser} from '../store/actiongenerators/actions';
import errors from '../store/reducers/errors';
import TodosList from '../components/TodosList';
import {removeError} from '../store/actiongenerators/actions';

const store = createStore(
  combineReducers({
    currentUser,
    errors
  }),
  compose(
    applyMiddleware(thunk)
  )
);

if(localStorage.jwtToken){
  try{
     store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
  }catch(error){
      store.dispatch(setCurrentUser({}));
  }
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app-cont">
          <BrowserRouter>
            <div>
              <NavBar />
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/signup" render={() => {
                  store.dispatch(removeError());
                  return (
                    <AuthForm signUp btnText="Sign Up" heading="Add todo's by joining." />
                  );
                }
                } />
                <Route exact path="/signin" render={() => {
                  store.dispatch(removeError());
                  return (
                    <AuthForm btnText="Log In" heading="Welcome Back" />
                  );
                }
                } />
                <Route exact path="/todoslist" component={TodosList} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
