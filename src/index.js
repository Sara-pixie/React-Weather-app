import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Background from "./Background";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Background />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
