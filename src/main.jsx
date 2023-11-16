import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider,createBrowserRouter} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Login from "./pages/login/Login.jsx"
import Home from './pages/homePage/HomePage.jsx';
import Root from './template/Root.jsx';
import Register from './pages/signup/Register.jsx';
import WishList from './components/WishList/WishList.jsx';
import Cart from './pages/cart/Cart.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:"/test",
        element:<WishList/>
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ]
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/register',
    element:<Register/>
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
