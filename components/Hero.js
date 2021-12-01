import React from 'react'
import { motion } from "framer-motion"

import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'



const hue_image = {
			  position: 'relative',
			  zIndex: 1,
			  background: 'transparent',
			  scale: [1, 1.2, 1.1],
			  rotate: [0, 10, -10, 0],
			  transition: {
			   duration: .2
			  },
			  filter: [
				  'hue-rotate(0) contrast(100%)',
				  'hue-rotate(360deg) contrast(200%)',
				  'hue-rotate(45deg) contrast(300%)',
				  'hue-rotate(0) contrast(100%)'
				],
		}






export default function Hero() {
	return(

		<motion.div animate={{ y: 50 }} transition={{ type: "spring", stiffness: 100 }}>

			<section className="jumbotron text-center">
	          <div className="row" style={{display: 'flex', justifyContent: 'space-around', marginTop: '10vh'}}>
	            
	            <motion.div className="col-md-6 col-sm-12" whileHover={hue_image} >
	                <img src="/me.jpeg" alt="" width="500" height="700" />
	            </motion.div>
				<div className="col-md-6 col-sm-12">
	              <div style={{fontFamily: 'poppins', marginTop: '5vh'}}>
	                <h1 style={{fontSize: '7vw', fontFamily: 'samarkan', textAlign: 'center'}}>Rohit</h1>
	                <h1 style={{fontSize: '7vw', fontFamily: 'poppins', textAlign: 'center'}}>Chaudhary</h1>
	                <h3 style={{fontSize: '2vw', marginTop: '4vh'}}>Web Developer, Tech Enthusiast</h3>
	                <h5 style={{marginTop: '4vh'}}>A tech freak who loves to play with technologies, Learn new things and enjoy every moment of life.</h5>
	              </div>
	              <div style={{marginTop: '7vh'}}>
	                <Link href="mailto:someone@example.com"><button type="button" className="btn" style={{ marginRight: '20px', fontSize: '1rem', backgroundColor: 'orange'}}><i className="bi bi-person-rolodex" style={{marginRight: '10px', background: 'transparent'}}></i>Contact</button></Link>
	                <Link href="/About"><button type="button" className="btn btn-outline-dark">Know Me!</button></Link>
	              </div>
	            </div>
	          </div>
	      	</section>
	    </motion.div>




		
	)
}



