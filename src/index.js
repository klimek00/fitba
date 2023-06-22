import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App';
import Site_404 from "./routes/site_404";
import Site_soogulator from './routes/site_soogulator';
import Site_about_me from './routes/site_about_me'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: '/soogulator',
    element: <Site_soogulator/>
  },
  {
    path: '/about',
    element: <Site_about_me/>
  },
  {
    path: "*",
    element: <Site_404/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
