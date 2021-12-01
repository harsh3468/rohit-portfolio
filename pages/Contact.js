import React from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const myCard = {
  backgroundColor: "lightGrey",
};

const Contact = () => {
  return (
    <div className="main">
      <Navbar />
      <motion.div
        className="row justify-content-center"
        style={{ marginTop: "15vh" }}
        animate={{ y: 50 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="card col-8" style={myCard}>
          <div className="card-body">
            <div
              style={{
                textAlign: "center",
                fontSize: "3rem",
                fontFamily: "Josefin Sans",
                marginBottom: "5vh",
              }}
            >
              <h1>Contact!</h1>
            </div>
            <div className="mb-4 ml-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Name
              </label>
              <input
                type="name"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Full Name"
              />
            </div>
            <div className="mb-4 ml-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">
                Message{" "}
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn"
              style={{ backgroundColor: "#ebac2b" }}
            >
              Submit
            </button>
          </div>
        </div>
      </motion.div>
      <Navbar />
    </div>
  );
};

export default Contact;
