import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from "styled-components";

import App from './App';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
  html,
  body,
  #root {
    position: relative;
    background-image: linear-gradient(90deg, #61dafb, #41B883);
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Raleway', 'Roboto', sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    outline: none;
  }
`;


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
