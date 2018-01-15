import React from 'react';
import ReactDOM from 'react-dom';
// Connect redux store, render provider tag
// Provider is the "glue"
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import reducers from './reducers';

// Create store arguments: 
// (1) all different reducers in app 
// (2) initial state of app, good for server side rendering 
// (3) Middleware
const store = createStore(reducers, {}, applyMiddleware());

// Two arguments: (1) root component, (2) where we attempt to render inside dom
ReactDOM.render(
  // React component that reads changes frmo redux store, and re-renders to all child components
  <Provider store={store}><App /></Provider>,
  document.querySelector('#root')
);
