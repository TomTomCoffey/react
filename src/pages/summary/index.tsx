import { useSession, backToEdit } from "@/models/session";
import Router from "next/router"
import React from "react";
import { Block, Box, Button } from "react-bulma-components"

export default function Summary() {

    const session = useSession();


    // if(!session.user){
    //     Router.push("/login");
    // }

    const bill = session.user?.bills[session.user?.bills.length - 1];


    console.log(bill?.email);
    console.log(bill?.address);
    console.log(bill?.pName);


    function confirm(){
        Router.push("/")
    }

    function edit(){

        backToEdit();
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
                        <li> Patient Name: <strong> {bill?.pName} </strong> </li>
                        <li> Email: <strong> {bill?.email} </strong></li>
                        <li> Address: <strong> {bill?.address} </strong> </li>
                        <li> Hospital Name: <strong> {bill?.hospitalName} </strong> </li>
                        <li> Date of Service: <strong> {bill?.dateOfService} </strong></li>
                        <li> Amount: <strong> {bill?.amount} </strong> </li>
                        <li> Bill:   {/* if it's an image */ }
                        { <img src={bill?.filebase64} width={300} alt="Uploaded" />}
                        {/* if it's a pdf */}
                        {<img src={`data:image/jpeg;base64,${bill?.filebase64}`} />}
                        </li>
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
