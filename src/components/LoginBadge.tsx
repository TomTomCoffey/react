import { login, logout, useSession } from "@/models/session";
import { useState } from "react";
import { Button } from "react-bulma-components";



export default function loginBadge(){

    const session = useSession();



if(!session.user){
    
    return(
        <>
        <Button color="info" onClick={login}>Login</Button>
    

    </>
    )
}


   return(
    <>
   <Button color="danger" onClick={logout}>LogOut</Button>
    </>
   )

  


 

}

