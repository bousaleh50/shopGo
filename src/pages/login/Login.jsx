"use client"

import { z } from "zod";
import {useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import {Loader2} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { Link, useNavigate } from "react-router-dom";
import sidebar_image from "../../assets/images/sidebar_image.jpg"
import { axiosClient } from "../../api/axios/axios";
import { useContext, useEffect, useReducer } from "react";
import { UserContext } from "../../context/UserContext/UserContext";


const formSchema = z.object({
    email: z.string().email().min(2).max(50),
    password: z.string().min(8).max(30)
  })

function Login() {
    const {dispatch,state} = useContext(UserContext);
    const navigate = useNavigate()
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "test@example.com",
          password: "password",
        },
    });
    
    useEffect(()=>{
        if(state.isAuthenticated){
            navigate("/");
        }
    },[state.isAuthenticated])
    
    const onSubmit = async ({email,password})=>{
        await axiosClient.get("sanctum/csrf-cookie");
        await axiosClient.post("/api/login",{email,password}).then(res=>{
            if(res.status === 200){
                dispatch({type:"LOGIN",payload:res.data});
                navigate("/")
            }
        }).catch(({response})=>{
            form.setError("email",{
                message : response.data.errors.email.join()
            })
        });
    }
    return (
        <div className="w-screen h-screen flex flex-col items-center sm:flex-row">
            <div className="hidden   sm:flex h-full sm:w-1/2">
                <img src={sidebar_image} alt="" className="w-full"/>
            </div>
            <div className="flex flex-col items-center gap-4 m-auto h-full justify-center  w-full shadow-2xl sm:w-1/2">
                <div className="flex flex-col gap-4">
                    <h1 className="text-3xl">Login to <span className="text-red-500">ShopGO</span></h1>
                    <p>Enter your details below</p>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="email" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder="password" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <Button type="submit" disabled={form.formState.isSubmitting}>
                        {form.formState.isSubmitting && <Loader2 className={"mx-2 my-2 animate-spin"}/>}Login
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}

export default Login;