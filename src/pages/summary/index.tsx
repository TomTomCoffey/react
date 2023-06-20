import { useSession } from "@/models/session";
import Router from "next/router"
import { Box, Button } from "react-bulma-components"

export default function Summary() {

    const session = useSession();

    //const summary = session.user?.bills[bills.length-1]

    function confirm(){
        Router.push("/")
    }

    function edit(){
        Router.push("/products")
    }

    return (
        <>
        <Box style={{ width: 400, margin: 'auto', }}>
       <h1>Summary</h1>
        <h2>Bill Submitted</h2>
        <h3>Thank you for submitting your bill</h3>
        <Button style={{display: 'center'}} color="info" onClick={() => edit()}>Return to Edit Info</Button>
        <Button style={{display: 'center'}} color="info" onClick={() => confirm()}>Confirm</Button>

        </Box>
      
          
        </>


    )

  

}
