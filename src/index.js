import React from 'react';
import ReactDOM from 'react-dom/client';
import './globals.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import Profile from './pages/Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/profile" element={<Profile />} />
      {/* <App /> */}
    </Routes>
  </Router>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
