// Entry point for the build script in your package.json
import '@hotwired/turbo-rails';
import "./controllers";

import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './src/app'
import {store} from "./src/redux/store/configureStore";
import {Provider} from "react-redux";

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App/>
  </Provider>
);