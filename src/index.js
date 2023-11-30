import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './normalize.css';
import './assets/fonts/Roboto/Roboto-Light.ttf';
import './assets/fonts/Roboto/Roboto-LightItalic.ttf';
import './assets/fonts/Roboto/Roboto-Regular.ttf';
import './assets/fonts/Roboto/Roboto-Italic.ttf';
import './assets/fonts/Roboto/RobotoFlex-VariableFont.ttf';
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

