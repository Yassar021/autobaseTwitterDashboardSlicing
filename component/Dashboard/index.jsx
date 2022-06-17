import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react"
import AuthDashboard from "../../layout/authDashboard"

const Dashboard = () => {
    return ( 
        <AuthDashboard pageTitle={'Home'}>
            <Box>
                <Text fontSize={'28px'} fontWeight='700' fontFamily={'DM Sans'} color='#6484AA'>DASHBOARD</Text>
            </Box>
            <Flex direction={'row'} mt='48px' gap='23px'>
                <Box w='332px' h='205px' bgColor='#fff' shadow={'lg'} borderRadius='8px' pt='24px' pl='35px' pr='43px' pb='39px'>
                    <Text fontSize={'18px'} fontWeight='500' fontFamily={'DM Sans'}  color='#6484AA' >Today’s statistics</Text>
                    <Text align={'right'} mt='21px' fontSize={'42px'} fontWeight='500' fontFamily={'DM Sans'} color='#6484AA' >1,285</Text>
                    <Flex direction={'row'} justifyContent='space-between'>
                        <HStack spacing='10px'>
                            <Stack>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.65975 4.29871C7.69358 4.33167 7.83825 4.45612 7.95725 4.57205C8.70567 5.25171 9.93067 7.02472 10.3046 7.95271C10.3647 8.09364 10.4918 8.44995 10.5 8.64032C10.5 8.82274 10.458 8.99663 10.3728 9.16257C10.2538 9.36942 10.0666 9.53536 9.8455 9.62628C9.69208 9.68481 9.233 9.77574 9.22483 9.77574C8.72258 9.86666 7.9065 9.91667 7.00467 9.91667C6.14542 9.91667 5.36258 9.86666 4.85275 9.79222C4.84458 9.78369 4.27408 9.69277 4.07867 9.59332C3.72167 9.4109 3.5 9.0546 3.5 8.67328V8.64032C3.50875 8.39199 3.73042 7.86974 3.73858 7.86974C4.11308 6.99176 5.278 5.25966 6.05208 4.56353C6.05208 4.56353 6.251 4.36747 6.37525 4.28223C6.55375 4.14925 6.77483 4.08333 6.99592 4.08333C7.24267 4.08333 7.4725 4.15778 7.65975 4.29871Z" fill="#64C874"/>
                                </svg>
                            </Stack>
                            <Text fontSize={'16px'} fontWeight='400' fontFamily={'DM Sans'} color='#64C874'>6,3%</Text>
                        </HStack>
                        <Text fontSize={'16px'} fontWeight='400' fontFamily={'DM Sans'} color='#D0D2D3'>menfess</Text>
                    </Flex>
                </Box>
                <Box w='332px' h='205px' bgColor='#fff' shadow={'lg'} borderRadius='8px' pt='24px' pl='35px' pr='43px' pb='39px'>
                    <Text fontSize={'18px'} fontWeight='500' fontFamily={'DM Sans'}  color='#6484AA' >New Followers</Text>
                    <Text align={'right'} mt='21px' fontSize={'42px'} fontWeight='500' fontFamily={'DM Sans'} color='#6484AA' >385</Text>
                    <Flex direction={'row'} justifyContent='space-between'>
                        <HStack spacing='10px'>
                            <Stack>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.65975 4.29871C7.69358 4.33167 7.83825 4.45612 7.95725 4.57205C8.70567 5.25171 9.93067 7.02472 10.3046 7.95271C10.3647 8.09364 10.4918 8.44995 10.5 8.64032C10.5 8.82274 10.458 8.99663 10.3728 9.16257C10.2538 9.36942 10.0666 9.53536 9.8455 9.62628C9.69208 9.68481 9.233 9.77574 9.22483 9.77574C8.72258 9.86666 7.9065 9.91667 7.00467 9.91667C6.14542 9.91667 5.36258 9.86666 4.85275 9.79222C4.84458 9.78369 4.27408 9.69277 4.07867 9.59332C3.72167 9.4109 3.5 9.0546 3.5 8.67328V8.64032C3.50875 8.39199 3.73042 7.86974 3.73858 7.86974C4.11308 6.99176 5.278 5.25966 6.05208 4.56353C6.05208 4.56353 6.251 4.36747 6.37525 4.28223C6.55375 4.14925 6.77483 4.08333 6.99592 4.08333C7.24267 4.08333 7.4725 4.15778 7.65975 4.29871Z" fill="#64C874"/>
                                </svg>
                            </Stack>
                            <Text fontSize={'16px'} fontWeight='400' fontFamily={'DM Sans'} color='#64C874'>6,3%</Text>
                        </HStack>
                        <Text fontSize={'16px'} fontWeight='400' fontFamily={'DM Sans'} color='#D0D2D3'>users</Text>
                    </Flex>
                </Box>
                <Box w='332px' h='205px' bgColor='#fff' shadow={'lg'} borderRadius='8px' pt='24px' pl='35px' pr='43px' pb='39px'>
                    <Text fontSize={'18px'} fontWeight='500' fontFamily={'DM Sans'}  color='#6484AA' >Total Engagement</Text>
                    <Text align={'right'} mt='21px' fontSize={'42px'} fontWeight='500' fontFamily={'DM Sans'} color='#6484AA' >IDR 300,285</Text>
                    <Flex direction={'row'} justifyContent='space-between'>
                        <HStack spacing='10px'>
                            <Stack>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.34025 9.70129C6.30642 9.66833 6.16175 9.54387 6.04275 9.42795C5.29433 8.74829 4.06933 6.97527 3.69542 6.04728C3.63533 5.90635 3.50817 5.55004 3.5 5.35967C3.5 5.17726 3.542 5.00336 3.62717 4.83743C3.74617 4.63058 3.93342 4.46464 4.1545 4.37372C4.30792 4.31518 4.767 4.22426 4.77517 4.22426C5.27742 4.13334 6.0935 4.08333 6.99533 4.08333C7.85458 4.08333 8.63742 4.13334 9.14725 4.20778C9.15542 4.2163 9.72592 4.30723 9.92133 4.40668C10.2783 4.58909 10.5 4.9454 10.5 5.32671V5.35967C10.4912 5.60801 10.2696 6.13025 10.2614 6.13025C9.88692 7.00823 8.722 8.74033 7.94792 9.43647C7.94792 9.43647 7.749 9.63252 7.62475 9.71777C7.44625 9.85074 7.22517 9.91666 7.00408 9.91666C6.75733 9.91666 6.5275 9.84222 6.34025 9.70129Z" fill="#ED6F6F"/>
                                </svg>
                            </Stack>
                            <Text fontSize={'16px'} fontWeight='400' fontFamily={'DM Sans'} color='#64C874'>6,3%</Text>
                        </HStack>
                        <Text fontSize={'16px'} fontWeight='400' fontFamily={'DM Sans'} color='#D0D2D3'>interactions</Text>
                    </Flex>
                </Box>
            </Flex>
        </AuthDashboard>
    )
}

export default Dashboard