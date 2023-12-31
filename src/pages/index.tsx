import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useSession } from '@/models/session'
import { Box, Button } from 'react-bulma-components'
import { useState } from 'react'
import router, { Router } from 'next/router'

const inter = Inter({ subsets: ['latin'] })




export default function Home() {

  const session = useSession();

  const bills = session.user?.bills ?? [];

 console.log(session.user);

  const [visible, setVisible] = useState(false);

const handleToggle = () => {
  setVisible((current) => !current);
};

  const [viewBill, setViewBill] = useState(false);

  const handleViewBill = () => {
    setViewBill((current) => !current);

    return (
      <>
        <h2 className="subtitle">
          hello
        </h2>
      </>
    )
  };


   if(!session.user){
     router.push("/login");
    

   }


  if(!visible){
  return (
    <> 
       <section className="section is-small">
      <h1 className="title">
                Hello,  {session.user?.name ?? "Youre not logged in"}
      </h1>
        <h2 className="subtitle">
          Check out this page to look at past bills, or click the submit bill tab to add a new one.
        </h2>
      </section>

      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">
                  Past Bills
                </p>
                <p className="subtitle">
                  View past bills
                </p>
                </div>




              
                <footer className="card-footer">
                  <p className="card-footer-item">
                    <span>
                      <Button color="info" onClick={handleToggle} >View past bills</Button>
                    </span>
                  </p>
                </footer>
                </div>
                </div>
            </div>
      </div>



    </>
  
  )
}

    return (
      <>
       <section className="section is-small">
      <h1 className="title">
         Hello,  {session.user?.name ?? "Youre not logged in"}
      </h1>
        <h2 className="subtitle">
          Check out this page to look at past bills, or click the submit bill tab to add a new one.
        </h2>
      </section>
                 <div className="container">
        <div className="columns">
          <div className="column">
            <div className="card">
              <div className="card-content">
                <p className="title">
                  Past Bills
                </p>
                <p className="subtitle">
                  View past bills
                </p>
                </div>
                <div className="content">
                <ul>

                  
                  {bills.map((bill) => (
                    <li key={bill.id}>

                      <Box style={{ width: 400, margin: 'auto', }}>
                      <div className="card-header">
                        <p className="card-header-title">
                          Billing info
                        </p>
                   
                      </div>
                      <br></br>
                      <p> Patient Name: <strong> {bill.pName} </strong> </p>
                      <p> Email: <strong> {bill.email} </strong></p>
                      <p> Address: <strong> {bill.address} </strong> </p>
                      <p> Hospital Name: <strong> {bill.hospitalName} </strong> </p>
                      <p> Date of Service: <strong> {bill.dateOfService} </strong></p>
                      <p> Amount:  <strong>$ {bill.amount} </strong> </p>
                      <p> Bill:   {/* if it's an image */ }
                   
                      {/* if it's a pdf */ }
                      { <embed src={bill.filebase64} type="application/pdf" width="100%" height="600px" /> }

                      </p>   
                      <div className="card-footer">
                        {/* <span>
                          <Button color="info" onClick={handleViewBill} >View Bill Photo</Button>
                        </span> */}
                      </div>
                      </Box>
                    </li>
                  ))}
                </ul>
                </div>



                <footer className="card-footer">
                  <p className="card-footer-item">
                    <span>
                      <Button color="info" onClick={handleToggle} >Minimize</Button>
                    </span>
                  </p>
                </footer>
                </div>
                </div>
            </div>
      </div>
      </>

    )



}


