import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import todoReducer from '../store/reducers/todo-reducer';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../components/HomePage';
import ToDos from './ToDos';
import NavBar from './NavBar';
import CreateToDo from '../components/CreateToDo';

const store = createStore(todoReducer, compose(applyMiddleware(thunk)));

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
                <Route exact path="/gettodos" component={ToDos} />
                <Route exact path="/createtodo" component={CreateToDo} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
