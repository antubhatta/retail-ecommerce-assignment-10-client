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
import BrandDetails from './Components/BrandDetails';
import ProductDetails from './Components/ProductDetails';
import UpdateForm from './Components/UpdateForm';
import PrivateRoute from './Components/PrivateRoute';
import MyCart from './Pages/MyCart.jsx/MyCart';
import { DarkModeProvider } from './contexts/DarkModeContext';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch(`https://retail-ecommerce-assgnment-10-server.vercel.app/brands`)
      },
      {
        path: "/addProduct",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Registration></Registration>
      },
      {
        path:"/details/:brandName",
        element:<BrandDetails></BrandDetails>,
        loader: ()=> fetch(`https://retail-ecommerce-assgnment-10-server.vercel.app/products`)
      },
      {
        path:"productDetails/:id",
        element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: ({params})=> fetch(`https://retail-ecommerce-assgnment-10-server.vercel.app/products/${params.id}`)
      },
      {
        path:"products/:id/update",
        element:<PrivateRoute><UpdateForm></UpdateForm></PrivateRoute>,
        loader: ({params})=> fetch(`https://retail-ecommerce-assgnment-10-server.vercel.app/products/${params.id}`)
      },
      {
        path:"/myCart",
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
      }

      
    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeProvider>
     <AuthProvider> <RouterProvider router={router} /></AuthProvider>
     </DarkModeProvider>
  </React.StrictMode>,
)
