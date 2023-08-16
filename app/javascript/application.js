// Entry point for the build script in your package.json
import '@hotwired/turbo-rails';
import "./controllers";

import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './src/app'
import {store} from "./src/redux/store/configureStore";
import {Provider} from "react-redux";
import GreetingMessage from "./src/components/greetingMessage/greetingMessage";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/randomGreeting",
    element: <GreetingMessage/>
  }
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App/>
    </RouterProvider>
  </Provider>
);