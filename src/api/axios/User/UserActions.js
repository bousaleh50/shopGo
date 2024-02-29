import { useNavigate } from "react-router-dom";
import { USER_BASE_URL } from "../../../routes/routes";
import { axiosClient } from "../axios";
import { userACtions } from "./UserSlice";


export const userLogin = ({email,password})=>{
    return async (dispatch)=>{
        const login = async()=>{
            await axiosClient.get("sanctum/csrf-cookie");
            const response = await axiosClient.post(`${USER_BASE_URL}/login`,{email,password}).then(res=>{
                dispatch(userACtions.login(res.data));
            }).catch(({response})=>{
                dispatch(userACtions.setError(response.data.errors.email));
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
            //await axiosClient.post(`${USER_BASE_URL}/logout`)
            // the bug of delay 
            dispatch(userACtions.logout())
        }
        logout();
    }
}
