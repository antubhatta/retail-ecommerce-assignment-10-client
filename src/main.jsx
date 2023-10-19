import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root';
import AddProduct from './Pages/AddProduct/AddProduct';
import ErrorPage from './Components/ErrorPage';
import AuthProvider from './AuthProvider/AuthProvider';
import Registration from './Pages/Registration/Registration';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('../brand.json')
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Registration></Registration>
      }
      
    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider> <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
