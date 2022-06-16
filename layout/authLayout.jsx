import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";


const AuthLayout = ({children, pageTitle}) => {
    return ( 
        <>
        <Head>
            <title>Dashboard | {pageTitle}</title>
            <meta name="description" content="Ariesloe Studio" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Box width='100%' h='100vh' bgColor={'#3786E5'}>
            <Container maxW='6xl' pt='123px'>
                <Box>
                    {children}
                </Box>
            </Container>
        </Box>
        </>
    )
}

export default AuthLayout