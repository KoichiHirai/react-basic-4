// import React from 'react';
// import ReactDOM from 'react-dom/client';
import {hydrateRoot} from 'react-dom/client';
import './index.scss';
import App from './App'
import reportWebVitals from './reportWebVitals';

console.log("App at index.tsx" + App + "\n\n");
console.log("あああああああああ");

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const container = document.getElementById('root')!;
hydrateRoot(container, <App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
