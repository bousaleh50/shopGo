import { USER_BASE_URL } from "../../../routes/routes";
import { UserActions } from "./UserSlice"


export const login = ({email,password})=>{
    return async (dispatch)=>{
        const userLogin = async ()=>{
            await axiosClient.get("sanctum/csrf-cookie");
            const user =  await axiosClient.post(`${USER_BASE_URL}/login`,{email,password}); 
            return user;
        }
        try {
            const user = await userLogin()
            dispatch(UserActions.login(user));
        } catch (error) {
            console.log(error);
        }
    }
    
}