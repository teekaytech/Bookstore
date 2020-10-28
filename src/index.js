import React, { createStore } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './components/App';

import rootReducer from './reducers/index';

const state = {
  books: [
    {
      id: Math.random(),
      title: 'lord of the rings',
      category: 'adventure',
    },

    {
      id: Math.random(),
      title: 'Harry potter',
      category: 'adventure',
    },

    {
      id: Math.random(),
      title: 'The Hobbit',
      category: 'adventure',
    },

  ],
};

const store = createStore(rootReducer, state);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
