import React from 'react'
import { Box } from '@chakra-ui/react'
import { motion } from "framer-motion"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'





const myCard = {
	
	backgroundColor: 'lightGrey'
}


const Contact = () => {
	return (

		<div className="main">
		<Navbar/>
		<motion.div className="row justify-content-center" style={{marginTop: '15vh'}} animate={{ y: 50 }} transition={{ type: "spring", stiffness: 100 }}>
			<div className="card col-8" style={myCard}>
				<div class="card-body">
				<div style={{textAlign: 'center', fontSize: '3rem', fontFamily: 'Josefin Sans', marginBottom: '5vh'}}>
					<h1>Contact!</h1>
				</div>
				<div class="mb-4 ml-3">
				  <label for="exampleFormControlInput1" class="form-label">Name</label>
				  <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Full Name" />
				</div>
				<div class="mb-4 ml-3">
				  <label for="exampleFormControlInput1" class="form-label">Email address</label>
				  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
				</div>
				<div class="mb-4">
				  <label for="exampleFormControlTextarea1" class="form-label">Message </label>
				  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
				</div>
				<button type="submit" class="btn" style={{backgroundColor: '#ebac2b'}}>Submit</button>
				</div>
			</div>
		</motion.div>
		<Navbar />
		</div>
	)
}

export default Contact