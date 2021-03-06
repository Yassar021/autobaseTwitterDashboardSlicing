import { SearchIcon } from "@chakra-ui/icons";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Center, Flex, HStack, Image, Input, InputGroup, InputRightElement, Link, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";

const AuthDashboard = ({children, pageTitle}) => {
    return ( 
        <>
        <Head>
            <title>Dashboard | {pageTitle}</title>
            <meta name="description" content="Ariesloe Studio" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Flex direction={'row'}>
            {/* Nav SideBar */}
            <Box w='280px' h={{md:'1360px',lg:'1020px',xl:'982px','2xl':'1060px'}} bgColor='#3786E5' pt='72px' px='36px'>
                {/* Logo */}
                <Center pb='72px' alignItems={'center'}>
                    <Stack>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30.8994 7.5606C30.8194 8.0606 30.7794 8.5606 30.7794 9.0606C30.7794 13.5606 34.4194 17.1986 38.8994 17.1986C39.3994 17.1986 39.8794 17.1406 40.3794 17.0606V33.1986C40.3794 39.9806 36.3794 44.0006 29.5794 44.0006H14.8014C7.99939 44.0006 3.99939 39.9806 3.99939 33.1986V18.4006C3.99939 11.6006 7.99939 7.5606 14.8014 7.5606H30.8994ZM31.3014 19.7206C30.7594 19.6606 30.2214 19.9006 29.8994 20.3406L25.0614 26.6006L19.5194 22.2406C19.1794 21.9806 18.7794 21.8786 18.3794 21.9206C17.9814 21.9806 17.6214 22.1986 17.3794 22.5186L11.4614 30.2206L11.3394 30.4006C10.9994 31.0386 11.1594 31.8586 11.7594 32.3006C12.0394 32.4806 12.3394 32.6006 12.6794 32.6006C13.1414 32.6206 13.5794 32.3786 13.8594 32.0006L18.8794 25.5386L24.5794 29.8206L24.7594 29.9386C25.3994 30.2786 26.1994 30.1206 26.6594 29.5186L32.4394 22.0606L32.3594 22.1006C32.6794 21.6606 32.7394 21.1006 32.5194 20.6006C32.3014 20.1006 31.8194 19.7606 31.3014 19.7206ZM39.1796 4C41.8396 4 43.9996 6.16 43.9996 8.82C43.9996 11.48 41.8396 13.64 39.1796 13.64C36.5196 13.64 34.3596 11.48 34.3596 8.82C34.3596 6.16 36.5196 4 39.1796 4Z" fill="white"/>
                        </svg>
                    </Stack>
                </Center>

                <Flex direction={'column'} gap='36px'> 
                    <Stack direction={'row'} spacing='12px' ml='16px'>
                        <Link href='/dashboard' textDecoration={'none'} _hover={{textDecoration:'none'}}>
                            <HStack spacing='12px'>
                                <Stack>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.6123 17.3111V14.763C7.6123 14.1125 8.14346 13.5852 8.79868 13.5852H11.1938C11.5085 13.5852 11.8102 13.7093 12.0327 13.9302C12.2552 14.1511 12.3802 14.4506 12.3802 14.763V17.3111C12.3782 17.5815 12.485 17.8416 12.677 18.0335C12.8689 18.2254 13.13 18.3333 13.4024 18.3333H15.0365C15.7997 18.3353 16.5323 18.0357 17.0726 17.5007C17.613 16.9656 17.9166 16.2391 17.9166 15.4815V8.22237C17.9166 7.61037 17.6434 7.02986 17.1705 6.63721L11.6117 2.22988C10.6447 1.45712 9.25924 1.48207 8.32114 2.28914L2.88916 6.63721C2.39393 7.01828 2.09794 7.60052 2.08331 8.22237V15.4741C2.08331 17.0532 3.3728 18.3333 4.96346 18.3333H6.56022C7.126 18.3333 7.58581 17.8802 7.58991 17.3185L7.6123 17.3111Z" fill="white"/>
                                    </svg>
                                </Stack>
                                <Text fontSize={'16px'} fontWeight='500' color='#fff'>Dashboard</Text>
                            </HStack>
                        </Link>
                    </Stack>

                    <Accordion defaultIndex={[0]} allowMultiple>
                        <AccordionItem border={'none'}>
                            <h2>
                                <Flex direction={'row'} gap='12px'>
                                    <AccordionButton _hover={{background:'none'}}>
                                        <Stack my='auto'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.4676 11.683C17.051 11.683 18.3334 12.9438 18.3334 14.4993C18.3334 16.054 17.051 17.3148 15.4676 17.3148C13.8852 17.3148 12.6019 16.054 12.6019 14.4993C12.6019 12.9438 13.8852 11.683 15.4676 11.683ZM8.40276 13.2983C9.09628 13.2983 9.65924 13.8514 9.65924 14.5327C9.65924 15.2132 9.09628 15.7672 8.40276 15.7672H2.92316C2.22965 15.7672 1.66669 15.2132 1.66669 14.5327C1.66669 13.8514 2.22965 13.2983 2.92316 13.2983H8.40276ZM4.53241 2.5C6.11574 2.5 7.39814 3.76082 7.39814 5.31547C7.39814 6.87102 6.11574 8.13184 4.53241 8.13184C2.95001 8.13184 1.66669 6.87102 1.66669 5.31547C1.66669 3.76082 2.95001 2.5 4.53241 2.5ZM17.0778 4.08194C17.7704 4.08194 18.3334 4.63502 18.3334 5.31547C18.3334 5.99682 17.7704 6.54991 17.0778 6.54991H11.5982C10.9047 6.54991 10.3417 5.99682 10.3417 5.31547C10.3417 4.63502 10.9047 4.08194 11.5982 4.08194H17.0778Z" fill="white"/>
                                            </svg>
                                        </Stack>
                                        <Text ml='14px' mr='12px' fontSize={'16px'} fontWeight='500' color='#fff' fontFamily={'DM Sans'}>Authentication</Text>

                                        <AccordionIcon color={'#fff'} />
                                    </AccordionButton>
                                </Flex>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Box ml='20px' mt='31px' borderLeft={'1.5px solid rgba(255, 255, 255, 0.25)'}>
                                    <Stack direction={'column'} spacing='28px'>
                                        <Link href="/manageAdmin" textDecoration={'none'} _hover={{textDecoration:'none'}}>
                                            <Text ml='14px' mr='12px' fontSize={'16px'} fontWeight='500' color='#fff' fontFamily={'DM Sans'}>Manage Admin</Text>
                                        </Link>
                                        {/* <Link href="#" textDecoration={'none'} _hover={{textDecoration:'none'}}>
                                            <Text ml='14px' mr='12px' fontSize={'16px'} fontWeight='500' color='#fff' fontFamily={'DM Sans'}> Manage User</Text>
                                        </Link> */}
                                    </Stack>
                                </Box>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>

                    <Stack direction={'row'} spacing='12px' ml='16px'>
                        <Link href='/projects' textDecoration={'none'} _hover={{textDecoration:'none'}}>
                            <HStack spacing='12px'>
                                <Stack>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.8912 0.666992C15.7253 0.666992 17.3253 2.27449 17.3337 5.10866V12.892C17.3337 15.7253 15.7253 17.3337 12.8912 17.3337H5.10866C2.27449 17.3337 0.666992 15.7253 0.666992 12.892V5.10866C0.666992 2.27449 2.27449 0.666992 5.10866 0.666992H12.8912ZM9.41699 4.10866C9.18283 3.96699 8.89949 3.96699 8.67533 4.10866C8.44949 4.24949 8.32533 4.50866 8.34949 4.76699V13.2587C8.39199 13.617 8.69116 13.8837 9.04116 13.8837C9.40033 13.8837 9.69949 13.617 9.73283 13.2587V4.76699C9.76616 4.50866 9.64199 4.24949 9.41699 4.10866ZM5.52533 6.84199C5.30033 6.70033 5.01616 6.70033 4.79199 6.84199C4.56616 6.98366 4.44199 7.24116 4.46699 7.50033V13.2587C4.49949 13.617 4.79949 13.8837 5.15783 13.8837C5.51699 13.8837 5.81616 13.617 5.84949 13.2587V7.50033C5.87533 7.24116 5.74949 6.98366 5.52533 6.84199ZM13.2412 9.86699C13.017 9.72533 12.7337 9.72533 12.5003 9.86699C12.2745 10.0087 12.1503 10.2578 12.1837 10.5253V13.2587C12.217 13.617 12.5162 13.8837 12.8753 13.8837C13.2253 13.8837 13.5245 13.617 13.567 13.2587V10.5253C13.5912 10.2578 13.467 10.0087 13.2412 9.86699Z" fill="white"/>
                                    </svg>
                                </Stack>
                                <Text fontSize={'16px'} fontWeight='500' color='#fff'>Projects</Text>
                            </HStack>
                        </Link>
                    </Stack>

                    <Stack direction={'row'} spacing='12px' ml='16px'>
                        <Link href="/testimonials" textDecoration={'none'} _hover={{textDecoration:'none'}}>
                            <HStack spacing='12px'>
                                <Stack>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.6123 17.3111V14.763C7.6123 14.1125 8.14346 13.5852 8.79868 13.5852H11.1938C11.5085 13.5852 11.8102 13.7093 12.0327 13.9302C12.2552 14.1511 12.3802 14.4506 12.3802 14.763V17.3111C12.3782 17.5815 12.485 17.8416 12.677 18.0335C12.8689 18.2254 13.13 18.3333 13.4024 18.3333H15.0365C15.7997 18.3353 16.5323 18.0357 17.0726 17.5007C17.613 16.9656 17.9166 16.2391 17.9166 15.4815V8.22237C17.9166 7.61037 17.6434 7.02986 17.1705 6.63721L11.6117 2.22988C10.6447 1.45712 9.25924 1.48207 8.32114 2.28914L2.88916 6.63721C2.39393 7.01828 2.09794 7.60052 2.08331 8.22237V15.4741C2.08331 17.0532 3.3728 18.3333 4.96346 18.3333H6.56022C7.126 18.3333 7.58581 17.8802 7.58991 17.3185L7.6123 17.3111Z" fill="white"/>
                                    </svg>
                                </Stack>
                                <Text fontSize={'16px'} fontWeight='500' color='#fff'>Testimonials</Text>
                            </HStack>
                        </Link>
                    </Stack>
                    
                    <Stack direction={'row'} spacing='12px' ml='16px'>
                        <Link href="/teams" textDecoration={'none'} _hover={{textDecoration:'none'}}>
                            <HStack spacing='12px'>
                                <Stack>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.6123 17.3111V14.763C7.6123 14.1125 8.14346 13.5852 8.79868 13.5852H11.1938C11.5085 13.5852 11.8102 13.7093 12.0327 13.9302C12.2552 14.1511 12.3802 14.4506 12.3802 14.763V17.3111C12.3782 17.5815 12.485 17.8416 12.677 18.0335C12.8689 18.2254 13.13 18.3333 13.4024 18.3333H15.0365C15.7997 18.3353 16.5323 18.0357 17.0726 17.5007C17.613 16.9656 17.9166 16.2391 17.9166 15.4815V8.22237C17.9166 7.61037 17.6434 7.02986 17.1705 6.63721L11.6117 2.22988C10.6447 1.45712 9.25924 1.48207 8.32114 2.28914L2.88916 6.63721C2.39393 7.01828 2.09794 7.60052 2.08331 8.22237V15.4741C2.08331 17.0532 3.3728 18.3333 4.96346 18.3333H6.56022C7.126 18.3333 7.58581 17.8802 7.58991 17.3185L7.6123 17.3111Z" fill="white"/>
                                    </svg>
                                </Stack>
                                <Text fontSize={'16px'} fontWeight='500' color='#fff'>Teams</Text>
                            </HStack>
                        </Link>
                    </Stack>

                    <Stack direction={'row'} spacing='12px' ml='16px'>
                        <Link href='/contact' textDecoration={'none'} _hover={{textDecoration:'none'}}>
                            <HStack spacing='12px'>
                                <Stack>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.6123 17.3111V14.763C7.6123 14.1125 8.14346 13.5852 8.79868 13.5852H11.1938C11.5085 13.5852 11.8102 13.7093 12.0327 13.9302C12.2552 14.1511 12.3802 14.4506 12.3802 14.763V17.3111C12.3782 17.5815 12.485 17.8416 12.677 18.0335C12.8689 18.2254 13.13 18.3333 13.4024 18.3333H15.0365C15.7997 18.3353 16.5323 18.0357 17.0726 17.5007C17.613 16.9656 17.9166 16.2391 17.9166 15.4815V8.22237C17.9166 7.61037 17.6434 7.02986 17.1705 6.63721L11.6117 2.22988C10.6447 1.45712 9.25924 1.48207 8.32114 2.28914L2.88916 6.63721C2.39393 7.01828 2.09794 7.60052 2.08331 8.22237V15.4741C2.08331 17.0532 3.3728 18.3333 4.96346 18.3333H6.56022C7.126 18.3333 7.58581 17.8802 7.58991 17.3185L7.6123 17.3111Z" fill="white"/>
                                    </svg>
                                </Stack>
                                <Text fontSize={'16px'} fontWeight='500' color='#fff'>Contact</Text>
                            </HStack>
                        </Link>
                    </Stack>

                    <Stack direction={'row'} spacing='12px' ml='16px'>
                        <Link href="/quotes" textDecoration={'none'} _hover={{textDecoration:'none'}}>
                            <HStack spacing='12px'>
                                <Stack>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.6166 1.66599C16.4416 1.66599 18.3332 3.64932 18.3332 6.59932V13.4085C18.3332 16.3501 16.4416 18.3326 13.6166 18.3326H6.39157C3.56657 18.3326 1.66656 16.3501 1.66656 13.4085V6.59932C1.66656 3.64932 3.56657 1.66599 6.39157 1.66599H13.6166ZM9.99156 8.73348C9.59157 8.73348 9.26657 9.06598 9.26657 9.46682V13.1502C9.26657 13.5501 9.59157 13.8751 9.99156 13.8751C10.3999 13.8751 10.7249 13.5501 10.7249 13.1502V9.46682C10.7249 9.06598 10.3999 8.73348 9.99156 8.73348ZM10.0082 6.09182C9.5999 6.09182 9.2749 6.41682 9.2749 6.82515C9.2749 7.22432 9.5999 7.55015 9.99156 7.55015C10.4082 7.55015 10.7332 7.22432 10.7332 6.82515C10.7332 6.41682 10.4082 6.09182 10.0082 6.09182Z" fill="white"/>
                                    </svg>
                                </Stack>
                                <Text fontSize={'16px'} fontWeight='500' color='#fff'>Quotes</Text>
                            </HStack>
                        </Link>
                    </Stack>

                </Flex>
            </Box>
            <Box >
                {/* Search */}
                <Box w={{xl:'1159px','2xl':'1820px'}} h='80px' bgColor='#fff'>
                    <Flex direction={'row'} justifyContent='space-between' py='15px' pl='43px' pr='18px'>
                        <Box>
                            <InputGroup bgColor={'#F4F9FF'}>
                                <InputRightElement top={'5px'}
                                pointerEvents='none'
                                // eslint-disable-next-line react/no-children-prop
                                children={<SearchIcon color='gray.300' />}
                                />
                                <Input w='505px' h='50px' type='tel' placeholder='Search' _placeholder={{fontSize:'15px', color:'#9AB1CC'}} />
                            </InputGroup>
                        </Box>
                        <Stack direction={'row'} spacing='16px' my='auto'>
                            <Link>
                                <Stack>
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.96318 19.545C10.4631 19.4393 13.5093 19.4393 14.0092 19.545C14.4366 19.6438 14.8987 19.8744 14.8987 20.378C14.8738 20.8574 14.5926 21.2824 14.204 21.5523C13.7001 21.9451 13.1088 22.1939 12.4906 22.2835C12.1487 22.3278 11.8128 22.3288 11.4828 22.2835C10.8636 22.1939 10.2723 21.9451 9.76938 21.5513C9.37978 21.2824 9.09852 20.8574 9.07367 20.378C9.07367 19.8744 9.53582 19.6438 9.96318 19.545ZM12.0452 2.31714C14.1254 2.31714 16.2502 3.30416 17.5125 4.9418C18.3314 5.9963 18.7071 7.04979 18.7071 8.68744V9.11347C18.7071 10.3694 19.039 11.1097 19.7695 11.9627C20.3231 12.5912 20.5 13.3979 20.5 14.2732C20.5 15.1474 20.2128 15.9773 19.6373 16.6511C18.884 17.4588 17.8215 17.9745 16.7372 18.0641C15.1659 18.1981 13.5937 18.3109 12.0005 18.3109C10.4063 18.3109 8.83505 18.2434 7.26375 18.0641C6.17846 17.9745 5.11602 17.4588 4.36367 16.6511C3.78822 15.9773 3.5 15.1474 3.5 14.2732C3.5 13.3979 3.6779 12.5912 4.23049 11.9627C4.98384 11.1097 5.29392 10.3694 5.29392 9.11347V8.68744C5.29392 7.00548 5.71333 5.90566 6.577 4.829C7.86106 3.25884 9.91935 2.31714 11.9558 2.31714H12.0452Z" fill="#6484AA"/>
                                    </svg>
                                </Stack>
                            </Link>
                            <Link>
                                <Stack>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.9394 3C18.2804 3 19.5704 3.53 20.5194 4.481C21.4694 5.43 22.0004 6.71 22.0004 8.05V15.95C22.0004 18.74 19.7304 21 16.9394 21H7.06037C4.26937 21 2.00037 18.74 2.00037 15.95V8.05C2.00037 5.26 4.25937 3 7.06037 3H16.9394ZM18.0704 8.2C17.8604 8.189 17.6604 8.26 17.5094 8.4L13.0004 12C12.4204 12.481 11.5894 12.481 11.0004 12L6.50037 8.4C6.18937 8.17 5.75937 8.2 5.50037 8.47C5.23037 8.74 5.20037 9.17 5.42937 9.47L5.56037 9.6L10.1104 13.15C10.6704 13.59 11.3494 13.83 12.0604 13.83C12.7694 13.83 13.4604 13.59 14.0194 13.15L18.5304 9.54L18.6104 9.46C18.8494 9.17 18.8494 8.75 18.5994 8.46C18.4604 8.311 18.2694 8.22 18.0704 8.2Z" fill="#6484AA"/>
                                    </svg>
                                </Stack>
                            </Link>
                            <HStack spacing='24px'>
                                <Box>
                                    <Image src='/profile.png' w='40px' h='40px' alt='profile' />
                                </Box>
                                <Box>
                                    <Text fontSize={'16px'} fontWeight='500' color='#6484AA'>Jack Wilder</Text>
                                    <Text fontSize={'12px'} fontWeight='200' color='#C3CBD4'>Administrator</Text>
                                </Box>
                            </HStack>
                        </Stack>
                    </Flex>
                </Box>
                <Box w='100%' pt='64px' px='59px' bgColor='#F4F9FF' h='900px'>
                    {children}
                </Box>
            </Box>
        </Flex>
        </>
    )
}

export default AuthDashboard