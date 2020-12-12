import React, { Component } from 'react';
//import logo from './logo.svg';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Settings from './Settings/Settings';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../redux/rootReducer';
//import devToolsEnhancer from 'remote-redux-devtools';

let store = createStore(rootReducer, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());

function App () {
  return (
  <BrowserRouter>
    <Provider store={store}>
      <div className="App">
        <Header />
        <div className="appWrapperContent">
          <Switch>
            <Route exact path='/' render={ () => <Main />} />
            <Route path='/settings' render={ () => <Settings />} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Provider>
  </BrowserRouter>
  );
}

export default App;
