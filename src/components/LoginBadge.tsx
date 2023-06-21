import { login, logout, useSession } from "@/models/session";
import router, { Router } from "next/router";
import { useState } from "react";
import { Button } from "react-bulma-components";






export default function loginBadge(){

    const session = useSession();

    function log(){

        router.push("/login");
    }

    function out(){
        logout();
        router.push("/login");
    }
    
    



if(!session.user){
    
    return(
        <>
        <Button color="info" onClick={log}>Login</Button>
    

    </>
    )
}


   return(
    <>
   <Button color="danger" onClick={out}>LogOut</Button>
    </>
   )

  


 

}

