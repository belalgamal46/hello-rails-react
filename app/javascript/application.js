// Entry point for the build script in your package.json
import '@hotwired/turbo-rails';
import "./controllers";

import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './src/app'

createRoot(document.getElementById('root')).render(
  <App/>
);