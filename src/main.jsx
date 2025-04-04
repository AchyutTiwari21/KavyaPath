import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './store/store.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthPage, LandingPage, PoemPage, AddPoemPage, ShlokaPage } from './pages/index.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/auth',
        element: <AuthPage />,
      }, 
      {
        path: '/allPoems',
        element: <PoemPage />,
      },
      {
        path: '/addPoem',
        element: <AddPoemPage />,
      }, 
      {
        path: '/shloka',
        element: <ShlokaPage />,
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
);
