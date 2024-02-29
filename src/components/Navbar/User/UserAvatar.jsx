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
import UserSubIcons from "./UserSubIcons";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../../api/axios/User/UserActions";
import { useNavigate } from "react-router-dom";

  export function UserAvatar() {
    const user = useSelector(state=>state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = ()=>{
      dispatch(userLogout());
      navigate("/login");
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
              user.isAuthenticated&&
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