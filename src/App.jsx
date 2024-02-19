import {RouterProvider} from "react-router-dom";
import { router } from "./routes";
import { UserContext } from "./context/UserContext/UserContext";
import { useReducer } from "react";
import {reducer } from "./context/UserContext/Reducer";


function App() {
  const [state,dispatch] = useReducer(reducer,{
    user:{},
    token:null,
    isAuthenticated:'true'===window.localStorage.getItem("AUTHENTICATED"),
  });
  return (
    <>
       <UserContext.Provider value={{state,dispatch}}>
         <RouterProvider router={router}/>
       </UserContext.Provider>
    </>
  )
}

export default App
