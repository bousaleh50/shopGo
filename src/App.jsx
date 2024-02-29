import {RouterProvider} from "react-router-dom";
import { router } from "./routes";

import {Provider} from "react-redux"
import { store } from "./store";


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
