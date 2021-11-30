import React from 'react'
import Navbar from '../components/Navbar'
import { motion } from "framer-motion"
import Footer from '../components/Footer'


const Works = () => {
	return (
		<div style={{backgroundColor: 'orange'}}>
			<Navbar/>
			<div className="card-body" style={{ overflow: 'hidden',marginTop: '20vh', fontFamily: 'Poppins'}}>
				<div className="container">
					<h1 class="display-2">My Projects...</h1>
				</div>

			</div>
      <motion.div animate={{ y: 50 }} transition={{ type: "spring", stiffness: 100 }} style={{ backgroundColor: 'orange'}}>
      <div class="container" style={{marginTop: '8vh',fontFamily: 'Poppins', backgroundColor: 'orange'}}>
        <div class="row row-cols-1 row-cols-md-2 g-5 justify-content-around" style={{ backgroundColor: 'orange'}}>
        <motion.div whileHover={{ scale: 1}} whileTap={{scale: 0.8}} transition={{delay: 0.2}} style={{ backgroundColor: 'transparent', scale: '0.9'}}>
          <div class="col" style={{ backgroundColor: 'orange'}}>
            <div class="card" style={{ backgroundColor: 'orange'}}>
              <img src="/fyb.png" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title display-5">Find Your Boat</h5>
                <p class="card-text fs-5">FindYourBoat(FYB) is an educational platform which provides perfect & precise joruney to their career. This project is built with frameworks like Bootstrap, etc and languages like HTML, CSS, JavaScript.</p>
              </div>
            </div>
          </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1}} whileTap={{scale: 0.8}} transition={{delay: 0.2}} style={{ backgroundColor: 'transparent', scale: '0.9'}}>
          <div class="col" style={{ backgroundColor: 'orange'}}>
            <div class="card" style={{ backgroundColor: 'orange'}}>
              <img src="/spo.png" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title display-5">Spotify Web Player</h5>
                <p class="card-text fs-5">Made a Spotify Web Player UI Clone with HTMl, CSS, JavaScript. It also contains Spotify's official webpage clone. It also contains frameworks like bootstrap, etc.</p>
              </div>
            </div>
          </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1}} whileTap={{scale: 0.8}} transition={{delay: 0.2}} style={{ backgroundColor: 'transparent', scale: '0.9'}}>
          <div class="col" style={{ backgroundColor: 'orange'}}>
            <div class="card" style={{ backgroundColor: 'orange'}}>
              <img src="/cllg.png" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title display-5">College Management System</h5>
                <p class="card-text fs-5">Built a College Management System with C/C++. This project includes escape codes, file handling, data structures, etc. It helps to maintain the attendance and progress record of all the students and faculty. </p>
              </div>
            </div>
          </div>
          </motion.div>

          <motion.div whileHover={{ scale: 1}} whileTap={{scale: 0.8}} transition={{delay: 0.2}} style={{ backgroundColor: 'transparent', scale: '0.9'}}>
          <div class="col" style={{ backgroundColor: 'orange'}}>
            <div class="card" style={{ backgroundColor: 'orange'}}>
              <img src="/fz.png" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title display-5">Fitnesstepz</h5>
                <p class="card-text fs-5">Fitnesstepz is a fitness & healthcare organisation founded by me, which provides the best and perfect guidance to its users. It has connected google adsense and have a reach of monthly thousand viewers.</p>
              </div>
            </div>
          </div>
          </motion.div>
        </div>
    </div>
    </motion.div>


			<Footer />
		</div>
	)
}

export default Works




