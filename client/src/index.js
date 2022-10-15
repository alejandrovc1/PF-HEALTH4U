import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import {store} from './store/index';
=======
import { AuthProvider } from './context/authContext';

import { store } from './store/index'
>>>>>>> 7fee5bd4547a648e2823ca786d81b708fc9e4c76


ReactDOM.render(
  <Provider store={store}>
    {/* <Router> */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
    {/* </Router> */}
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
