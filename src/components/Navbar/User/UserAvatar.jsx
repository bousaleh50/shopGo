import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext/UserContext";
import { axiosClient } from "../../../api/axios/axios";
import { USER_BASE_URL } from "../../../routes/routes";
import UserSubIcons from "./UserSubIcons";

  export function UserAvatar() {
    const {state,dispatch} = useContext(UserContext);
    const handleLogout = async ()=>{
      await axiosClient.post(`${USER_BASE_URL}/logout`).then(res=>{
        console.log(res)
        dispatch({type:"LOGOUT"});
        console.log("logout successfully");
      }).catch(err=>{
        console.log(err);
      })
    }
    return (
      <>
        <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            {
              state.isAuthenticated&&
              <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <UserSubIcons className={"flex flex-col gap-4 sm:hidden"}/>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem></DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
            }
        </DropdownMenu>
      </>
    )
  }