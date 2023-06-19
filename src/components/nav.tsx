
import Link from 'next/link'
import {useState} from 'react'

export default function Nav() {
    return (

       // const [isMenuActive, setIsMenuActive ] = useState(false);
        <nav className="navbar is-primary">
        <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            
            
            
          </a>
          <div className="navbar-burger"  >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      
        <div className="navbar-menu" >
          <div className="navbar-start">

            <Link href="/" className="navbar-item">Home</Link>
            <Link href="/products" className="navbar-item">Submit Bill</Link>
            
          </div>
        </div>
        </div>
    </nav>
    )
}