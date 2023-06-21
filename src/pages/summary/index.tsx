import { useSession } from "@/models/session";
import Router from "next/router"
import React from "react";
import { Block, Box, Button } from "react-bulma-components"

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
        <div className="columns">
            <div className="column">
                <div className="card">
                    <div className="card-content">
                        <p className="title">
                            Summary
                        </p>
                        <p className="subtitle">
                            View your summary
                        </p>
                    </ div>
                    <div className="content">
                        <p></p>
                       
                    <ul>
                        <li> Patient Name: {}  </li>
                        <li> Email:  {}</li>
                        <li> Address: {} </li>
                        <li> Hospital Name: {} </li>
                        <li> Date of Service: {} </li>
                        <li> Amount: {} </li>
                        <li> Bill: {} </li>
                        <p></p>
                        <p></p>
                        

                    </ul>
                    </div>
                    <footer className="card-footer">
                        <p className="card-footer-item">
                            <span>
                                <Button color="info" onClick={() => edit()}>Edit</Button>
                            </span>
                        </p>
                        <p className="card-footer-item">
                            <span>
                                <Button color="success" onClick={() => confirm()}>Confirm</Button>
                            </span>
                        </p>
                    </footer>

                </div>
            </div>
        </div>
      </Box>
          </>
        


    )

  

}
