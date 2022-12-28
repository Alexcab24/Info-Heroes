import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { HerosApp } from './HerosApp';
import {Provider} from 'react-redux'
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.json'
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store = {store}>
<HashRouter>
  <HerosApp/>
  </HashRouter>
  </Provider>
  
   
  // </React.StrictMode>
)
