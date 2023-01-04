import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import petsAdoptingContext, { Provider } from "./context/context";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider>
    <App />
      </Provider>

);

