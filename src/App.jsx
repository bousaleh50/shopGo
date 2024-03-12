import {RouterProvider} from "react-router-dom";
import { router } from "./routes";

import {Provider, useSelector} from "react-redux"
import { store } from "./store";
import { useEffect } from "react";


function App() {
  return (
    <>
       <Provider store={store}>
        {/* <UserContext.Provider value={{state,dispatch}}> */}
          <RouterProvider router={router}/>
        { /* </UserContext.Provider> */}
       </Provider>
    </>
  )
}

export default App
