
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Loading from "../components/Loading";
import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
      const handleStart = (url) => {
        url !== router.pathname ? setLoading(true) : setLoading(false);
      };
      const handleComplete = (url) => setLoading(false);
      router.events.on("routeChangeStart", handleStart);
      router.events.on("routeChangeComplete", handleComplete);
      router.events.on("routeChangeError", handleComplete);
    }, [router]);
  return (
    <ChakraProvider>
    <Loading loading={loading} /> 
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp