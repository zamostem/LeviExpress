import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import { App } from './components/App';
import { HomePage } from './pages/HomePage/index.jsx';
import { ReservationPage } from './components/ReservationPage/index.jsx';
import './global.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/reservation',
        element: <ReservationPage />,
      },
    ]
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />
);
