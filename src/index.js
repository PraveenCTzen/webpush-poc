import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
// import OneSignal from 'react-onesignal';

// OneSignal.init({ appId: '2fc4c79b-5bf1-49d6-9bae-889cf6ea486a' });
// import clevertap from 'clevertap-web-sdk';


// clevertap.init('W9R-486-4W5Z')
// clevertap.privacy.push({ optOut: false });
// clevertap.privacy.push({useIP: false})
// clevertap.setLogLevel(3)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
