export const reducer = (state,action)=>{
    switch(action.type){
        case "LOGIN":
            window.localStorage.setItem("ACCESS_TOKEN",action.payload.token)
            window.localStorage.setItem("AUTHENTICATED",true)
            return {...state,
              user:action.payload.user,
              isAuthenticated:true,
              token:action.payload.token
            }
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
