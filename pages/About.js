import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div style={{ backgroundColor: "orange" }}>
      <Navbar />
      <div
        className="card-body"
        style={{
          marginTop: "25vh",
          marginBottom: "10vh",
          fontFamily: "Poppins",
        }}
      >
        <div className="container">
          <h1 className="display-2">{"About Me..."}</h1>
        </div>
      </div>
      <div className="container">
        <div className="row" style={{ backgroundColor: "orange" }}>
          <div className="col-md-8" style={{ backgroundColor: "orange" }}>
            <h1
              className="display-5"
              style={{
                marginTop: "3vh",
                marginBottom: "5vh",
                backgroundColor: "orange",
                fontFamily: "Poppins",
              }}
            >
              {"Hey! I'm Rohit"}
            </h1>
            <p
              className="fs-6"
              style={{
                marginBottom: "2vh",
                backgroundColor: "orange",
                fontFamily: "Poppins",
              }}
            >
              Quote close to my heart.
            </p>
            <div
              className="card"
              style={{ backgroundColor: "white", marginBottom: "5vh" }}
            >
              <div
                className="card-body"
                style={{ marginLeft: "0.5vw", backgroundColor: "orange" }}
              >
                <h1
                  className="display-6"
                  style={{ fontStyle: "italic", backgroundColor: "orange" }}
                >
                  {"Be the best version of yourself."}
                </h1>
              </div>
            </div>
            <div style={{ backgroundColor: "orange", fontFamily: "Poppins" }}>
              <p className="fs-6" style={{ backgroundColor: "orange" }}>
                {"I'm a web developer, software developer aspirant and a student of Electronics & Communication Engineering. Currently i'm in third year of my Bachelor's of Technology(B.Tech) from Abes Engineering College, Ghaziabad."}{" "}
              </p>
              <br />
              <p className="fs-6" style={{ backgroundColor: "orange" }}>
                {"My technical skills as a web dev are: HTML, CSS, JavaScript,PHP, MERN, NextJs, ChakraUI, MaterialUI, Framer Motion,Bootstrap, etc. Apart from them, i'm skilled in C/C++, python along with Data Structures & Algorithm."}{" "}
              </p>
              <br />
              <p className="fs-6" style={{ backgroundColor: "orange" }}>
                {"I have been solopreneur for more than year, started my whole new fitness & healthcare website from scratch. Gained knowledge about digital marketing, hence, learned skills like SEO, SMO, google Analytics, google Adsense, graphic designing, wordpress management, etc in detail."}
              </p>
              <br />
              <p className="fs-6" style={{ backgroundColor: "orange" }}>
                {"In my Inter Personal Skills: I have a great Leadership and Communicaton Skills. Been a Core Team member in more than one College Societies. A National Player in Yoga, Inter School Chammpion in Badminton, Football and Chess. Have a keen interest in learning new things everyday, solving problems, improving myself day by day, etc."}{" "}
              </p>
            </div>
          </div>
          <div
            className="col-md-3 offset-md-1"
            style={{ backgroundColor: "orange" }}
          >
            <h1
              className="display-6"
              style={{
                marginTop: "2vh",
                marginBottom: "2vh",
                backgroundColor: "orange",
                fontFamily: "Poppins",
              }}
            >
             {" Let's Connect!"}
            </h1>
            <p
              className="fs-6"
              style={{ marginBottom: "2vh", backgroundColor: "orange" }}
            >
              My DMs on Instagram and Linkedin are always open. Please feel free
              to connect
            </p>
            <a href="https://github.com/Rohitchaudhary13">
              <i
                className="bi bi-github"
                style={{
                  marginRight: "15px",
                  fontSize: "2vw",
                  backgroundColor: "orange",
                }}
              ></i>
            </a>
            <a href="https://www.instagram.com/_rohit.chaudhary__/?hl=en">
              <i
                className="bi bi-instagram"
                style={{ fontSize: "2vw", backgroundColor: "orange" }}
              ></i>
            </a>
            <a href="https://www.linkedin.com/in/rohit-choudhary-0b42641aa/?originalSubdomain=in">
              <i
                className="bi bi-linkedin"
                style={{
                  marginLeft: "15px",
                  fontSize: "2vw",
                  backgroundColor: "orange",
                }}
              ></i>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
