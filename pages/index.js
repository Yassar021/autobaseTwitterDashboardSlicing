import Head from "next/head"
import Login from "/component/Auth"

const { Box, Center, Text } = require("@chakra-ui/react")

const Index = () => {
  return ( 
    <>
    <Head>
      <title>Login Page</title>
    </Head>

    <Login />

    </>
  )
}

export default Index