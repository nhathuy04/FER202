import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Exercise1 from './Exercise1';
import Exercise2 from './Exercise2';
import Exercise3 from './Exercise3';
import Exercise4 from './Exercise4';
import Exercise5 from './Exercise5';
import Exercise6 from './Exercise6';
import Exercise7 from './Exercise7';
import Exercise8 from './Exercise8';
import Exercise9 from './Exercise9';
import Exercise10 from './Exercise10';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Exercise1/>
    <Exercise2/>
    <Exercise3/>
    <Exercise4/>
    <Exercise5/>
    <Exercise6/>
    <Exercise7/>
    <Exercise8/>
    <Exercise9/>
    <Exercise10/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
