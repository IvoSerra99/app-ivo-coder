import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './ul/layout/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/index.scss';
import "./components/Firebase";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
