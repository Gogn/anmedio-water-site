import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {AppState} from "./store/appState";

const app = (
  <AppState>
    <BrowserRouter basename={'/anmedio-water-site/'}>
      <App/>
    </BrowserRouter>
  </AppState>
)

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
