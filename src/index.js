import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware  } from "redux";
import logger from "redux-logger"
import thunk  from "redux-thunk"
import reducers from "./reducers"
import { Provider } from 'react-redux';

const store = createStore(reducers, applyMiddleware(thunk,logger))

const ReduxApp = () =>{
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    )
}

ReactDOM.render(
  <React.StrictMode>
    <ReduxApp/>
  </React.StrictMode>,
  document.getElementById('root')
);