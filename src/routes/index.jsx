import React from 'react'
import Login from "../pages/login/Login.jsx"
import Home from '../pages/homePage/HomePage.jsx';
import Layout from '../Layouts/Layout.jsx';
import Register from '../pages/signup/Register.jsx';
import WishList from '../components/WishList/WishList.jsx';
import Cart from '../pages/cart/Cart.jsx';
import { createBrowserRouter } from 'react-router-dom';
import GuestLayout from '../Layouts/Guest/GuestLayout.jsx';
import UserLayout from '../Layouts/User/UserLayout.jsx';

export const USER_URL = "/"

export const router = createBrowserRouter ([
  {
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:'/register',
        element:<Register/>
      },
    ]
  },
  {
    element:<UserLayout/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:"/whishlist",
        element:<WishList/>
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ]
  },
  {
    element:<GuestLayout/>,
    children:[
      {
        path:'/login',
        element:<Login/>
      },
    ]
  }
]);
