// import React from 'react';
// import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import {hydrateRoot} from 'react-dom/client';
import './index.scss';
import App from './App'
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root')!;
// hydrateRoot(container, <App />);

hydrateRoot(container, (
  <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
    <App />
  </BrowserRouter>
));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
