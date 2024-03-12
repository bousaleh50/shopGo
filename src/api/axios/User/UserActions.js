import { useNavigate } from "react-router-dom";
import { USER_BASE_URL } from "../../../routes/routes";
import { axiosClient } from "../axios";
import { userActions } from "./UserSlice";


export const userLogin = ({email,password})=>{
    return async (dispatch)=>{
        const login = async()=>{
            await axiosClient.get("sanctum/csrf-cookie");
            const response = await axiosClient.post(`${USER_BASE_URL}/login`,{email,password}).then(res=>{
                dispatch(userActions.login(res.data));
                window.localStorage.setItem("b_user",JSON.stringify(res.data.user));
                window.localStorage.setItem("tk",res.data.token);
                window.localStorage.setItem("AUTHENTICATED",true);
                return res;
            }).catch(({response})=>{
                dispatch(userActions.setError(response.data.errors.email));
                return response.data.errors.email;
            })
            return response;
        }
        return  login();
    }
}

export const userLogout = ()=>{
    return async (dispatch)=>{
        const logout = async ()=>{
            await axiosClient.post(`${USER_BASE_URL}/logout`)
            // the bug of delay 
            dispatch(userActions.logout())
            localStorage.clear();
        }
        logout();
    }
}

// export const setUser = ()=>{
//     return async (dispatch)=>{
//         const getUser = async ()=>{
//             dispatch(userActions.setUser({user,token}));
//         }
//         getUser();
//     }
// }

