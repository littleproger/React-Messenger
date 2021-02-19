import React from 'react';
import {render} from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { mainReducer } from './components/reducers/mainReducer';
import './index.css';
import App from './App';

const store = createStore(
  mainReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );
 
const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(
  app,
  document.getElementById('root')
);
