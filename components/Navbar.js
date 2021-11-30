import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { Nav, Button, Container, NavDropdown } from 'react-bootstrap';
import About from '../pages/About'
import Contact from '../pages/Contact'
import Works from '../pages/Works'

const Navbar = () => {
	return (
		<nav id="navbar1" className="navbar navbar-expand-md navbar-dark fixed-top">
			<div className="container">
			    <a className="navbar-brand" href="#">
			       <Image src="/rc_blacktext.png" alt="" width="70" height="70" style={{pointerEvents: 'none'}} />
				</a>
			    <button className="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation" style={{cursor: 'pointer',width: '30px', height:'30px'}}><span className="dark-blue-text">
				    <i className="fas fa-bars" style={{color: 'black'}}></i></span>
			    </button>
			   <div className="collapse navbar-collapse" id="navbarSupportedContent1">
				    <ul className="nav navbar-nav ms-auto" style={{fontFamily: 'Poppins', fontSize: '1.1rem'}}>
					    <li className="nav-item"><a className="nav-link text-dark" id="active1"><Link href="/" >Home</Link></a></li>
					    <li className="nav-item"><a className="nav-link text-dark" id="active2"><Link href="/Works">Works</Link></a></li>
					    <li className="nav-item"><a className="nav-link text-dark" id="active3"><Link href="/About">About</Link></a></li>
				    </ul>
				</div>
			</div>
		</nav>

	)
}

export default Navbar;