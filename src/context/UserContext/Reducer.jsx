
export  const initialState = {
    user:null,
    isAuthenticated:false,
    token:null,
}

export const reducer = (state,action)=>{
    switch(action.type){
        case "LOGIN":
            window.localStorage.setItem("ACCESS_TOKEN",action.payload.token)
            window.localStorage.setItem("AUTHENTICATED",true)
            return {...state,
              user:action.payload.user,
              isAuthenticated:action.payload.isAuthenticated,
              token:action.payload.token
            }
            break
        case "LOGOUT":
            localStorage.clear();
            return {
                ...state,
                isAuthenticated: false,
                user: null
            };
            default:
            return state;
    }
}
