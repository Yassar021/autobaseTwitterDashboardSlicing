import { Box, Button, Center, Checkbox, Container, Flex, FormControl, FormLabel, HStack, Input, Link, Stack, Text } from "@chakra-ui/react"
import AuthLayout from "../../layout/authLayout"
import Register from "./register"

const Login = () => {
    return ( 
        <AuthLayout pageTitle={'Login'}>
            <Flex direction={'column'} gap='48px' alignItems={'center'}>
                <Center>
                    <HStack spacing='16px' textAlign={'center'}>
                        <Stack>
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.8994 7.5606C30.8194 8.0606 30.7794 8.5606 30.7794 9.0606C30.7794 13.5606 34.4194 17.1986 38.8994 17.1986C39.3994 17.1986 39.8794 17.1406 40.3794 17.0606V33.1986C40.3794 39.9806 36.3794 44.0006 29.5794 44.0006H14.8014C7.9994 44.0006 3.9994 39.9806 3.9994 33.1986V18.4006C3.9994 11.6006 7.9994 7.5606 14.8014 7.5606H30.8994ZM31.3014 19.7206C30.7594 19.6606 30.2214 19.9006 29.8994 20.3406L25.0614 26.6006L19.5194 22.2406C19.1794 21.9806 18.7794 21.8786 18.3794 21.9206C17.9814 21.9806 17.6214 22.1986 17.3794 22.5186L11.4614 30.2206L11.3394 30.4006C10.9994 31.0386 11.1594 31.8586 11.7594 32.3006C12.0394 32.4806 12.3394 32.6006 12.6794 32.6006C13.1414 32.6206 13.5794 32.3786 13.8594 32.0006L18.8794 25.5386L24.5794 29.8206L24.7594 29.9386C25.3994 30.2786 26.1994 30.1206 26.6594 29.5186L32.4394 22.0606L32.3594 22.1006C32.6794 21.6606 32.7394 21.1006 32.5194 20.6006C32.3014 20.1006 31.8194 19.7606 31.3014 19.7206ZM39.1796 4C41.8396 4 43.9996 6.16 43.9996 8.82C43.9996 11.48 41.8396 13.64 39.1796 13.64C36.5196 13.64 34.3596 11.48 34.3596 8.82C34.3596 6.16 36.5196 4 39.1796 4Z" fill="white"/>
                            </svg>
                        </Stack>
                        <Text fontSize={{base:'24px',md:'32px'}} fontWeight='500' color='#fff'>Autobase Reborn</Text>
                    </HStack>
                </Center>
                <Box w={{sm:'420px',md:'557px'}} h='527px' bgColor={'#fff'} pt={{base:'30px',md:'48px'}} px={{base:'40px',md:'70px'}} pb='44px' borderRadius={'16px'} shadow='lg'>
                    <Text align={'center'} fontSize={'32px'} fontWeight='500' color='#3786E5'>Login</Text>

                    <Box mt='54px'>
                        <Box>
                            <FormControl isRequired>
                                <Input borderRadius={'8px'} h='56px'  borderColor={'#ABC9ED'} id='username' _placeholder={{color:'#3786E5',fontSize:'18px'}} placeholder="Username"  />
                            </FormControl>
                            <FormControl my='16px' isRequired>
                                <Input borderRadius={'8px'} h='56px'  borderColor={'#ABC9ED'} id='password' _placeholder={{color:'#3786E5',fontSize:'18px'}} placeholder="Password"  />
                            </FormControl>
                        </Box>
                        <Link href="/dashboard" _hover={{textDecoration:'none'}}>
                            <Button mt='16px'
                                size='md'
                                height='56px'
                                width='135.25px'
                                bgColor={'#3786E5'}
                                color='#fff'
                                _hover={{ bg: '#3786E5' }}
                                _active={{
                                    bg: '#3786E5',
                                    transform: 'scale(0.98)',
                                }}
                                >
                                Login
                            </Button>
                        </Link>
                        <Link href='/forgotPassword'>
                            <Text mt='41px' color='#6484AA' fontSize={'16px'}><u>Lupa password? </u></Text>
                        </Link>
                        <Text mt='16px' color='#B5BBC2' fontSize={'16px'}>Belum punya akun? <Link color='#6484AA' href='/register'><u>Buat akun baru</u></Link></Text>
                    </Box>
                </Box>
            </Flex>
        </AuthLayout>
    )
}

export default Login