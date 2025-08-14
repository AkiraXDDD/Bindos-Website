import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProfilePage from './ProfilePage.jsx';

const router = createBrowserRouter([
  {
  path: '/',
  element: <App />,
  errorElement: <div> 404 Not Found </div>
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
