import {RouterProvider} from "react-router-dom";
import { router } from "./routes";
import { UserContext } from "./context/UserContext/UserContext";
import { useReducer } from "react";
import {reducer } from "./context/UserContext/Reducer";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { api } from "./api/axios/cartApi";
import { Provider } from "react-redux";
import { store } from "./store/store";


function App() {
  const [state,dispatch] = useReducer(reducer,{
    user:{},
    token:null,
    isAuthenticated:'true'===window.localStorage.getItem("AUTHENTICATED"),
  });
  return (
    <>
        <Provider store={store}>
           <RouterProvider router={router}/>
        </Provider>
    </>
  )
}

export default App
