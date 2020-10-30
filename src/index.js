import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers/index';

const initState = {
  books: [
    {
      id: Math.floor(Math.random() * 10),
      title: 'lord of the rings',
      category: 'Action',
    },

    {
      id: Math.floor(Math.random() * 10),
      title: 'Harry potter',
      category: 'Horror',
    },

    {
      id: Math.floor(Math.random() * 10),
      title: 'The Hobbit',
      category: 'Sci-Fi',
    },

  ],
  filter: '',
};

const store = createStore(rootReducer, initState);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
