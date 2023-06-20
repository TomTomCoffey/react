import Router from "next/router"
import { Button } from "react-bulma-components"

export default function Summary() {

    

    return (
        <>
        <Button color="info" onClick={() => Router.push("/products")}>Submit new Bill</Button>
          
        </>


    )

  

}
