import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import Layout from "../components/Layout"
import Badge from 'react-bootstrap/Badge';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Hero from '../components/Hero'
import Footer from '../components/Footer'


export default function Home() {
  
  return (
    <Layout>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"/>
      <link
            rel="preload"
            href="/fonts/samarkand/samarkan-Regular.ttf"
            as="font"
            crossOrigin=""
          />
      <link
            rel="preload"
            href="/fonts/josefin/josefinSans-Regular.ttf"
            as="font"
            crossOrigin=""
          />
      <link
            rel="preload"
            href="/fonts/Poppins/Poppins-Regular.ttf"
            as="font"
            crossOrigin=""
          />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
      <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
      <title>Rohit_Chaudhary! 👩🏻‍💻 </title>
      <link rel="shortcut icon" href="/rc.png" />
    </Head>
      <Navbar />
      <Hero />
      <Footer />
    </Layout>

  )
}
