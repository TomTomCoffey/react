import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useSession } from '@/models/session'
import { Button } from 'react-bulma-components'
import { useState } from 'react'
import router, { Router } from 'next/router'

const inter = Inter({ subsets: ['latin'] })







export default function Home() {

  const session = useSession();

  const bills = session.user?.bills ?? [];

  const [visible, setVisible] = useState(false);

const handleToggle = () => {
  setVisible((current) => !current);
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
                      <a href={`/bills/${bill.patentName}`}>{}</a>
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


