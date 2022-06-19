import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, Button, HStack, Image, Link, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react"
import {AddIcon,} from "@chakra-ui/icons"
import { useRef } from "react"
import AuthDashboard from "../../../layout/authDashboard"

const Projects = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef()

    return ( 
        <AuthDashboard pageTitle={'Manage Projects'}>
            <Box>
                <Text fontSize={'28px'} fontWeight='700' fontFamily={'DM Sans'} color='#6484AA'>MANAGE PROJECTS</Text>
            </Box>

            <Box  mt='48px'>
                <Box mb='32px'>
                    <Link href="/editProjects" _hover={{textDecoration:'none'}}>
                        <Button 
                                leftIcon={<AddIcon />}
                                size='md'
                                height='56px'
                                width='160px'
                                bgColor={'#3786E5'}
                                color='#fff'
                                _hover={{ bg: '#3786E5' }}
                                _active={{
                                    bg: '#3786E5',
                                    transform: 'scale(0.98)',
                                }}
                                >
                                Add Project
                            </Button>
                    </Link>
                </Box>
                <TableContainer fontFamily={'DM Sans'}>
                    <Table size='lg' variant='simple'>
                        {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                        <Thead>
                            <Tr>
                                <Th color={'#6484AA'} fontSize='16px'>ID</Th>
                                <Th color={'#6484AA'} fontSize='16px'>Image Project</Th>
                                <Th color={'#6484AA'} fontSize='16px'>Name Project</Th>
                                <Th color={'#6484AA'} fontSize='16px'>Description</Th>
                                <Th color={'#6484AA'} fontSize='16px'>Category</Th>
                                <Th color={'#6484AA'} fontSize='16px'>Client</Th>
                                <Th color={'#6484AA'} fontSize='16px'>Technology</Th>
                                <Th color={'#6484AA'} fontSize='16px'>Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>1</Td>
                                <Td>
                                    <Image src='/' alt='Image Project' w='60px' h='60px' />
                                </Td>
                                <Td >The Desktop App Landing Page</Td>
                                <Td>Something has always existed. <br/>According to physics, there can never<br/> be true physical nothingness—though<br/> there
                                     can be times when existence<br/> resembles nothing.</Td>
                                <Td>Development</Td>
                                <Td>Acme, Inc</Td>
                                <Td>JavaScript, HTML, CSS</Td>
                                <Td>
                                    <HStack spacing={'16px'}>
                                        <Link href='/editAdmin' _hover={{textDecoration:'none'}}>
                                            <Button colorScheme={'messenger'}
                                                size='md'
                                                w='80px'
                                                >
                                                Edit
                                            </Button> 
                                        </Link>                                         
                                        <Box>
                                            <Button colorScheme='red' size={'md'} onClick={onOpen} w='80px'>
                                                Delete
                                            </Button>

                                            <AlertDialog
                                                isOpen={isOpen}
                                                leastDestructiveRef={cancelRef}
                                                onClose={onClose}
                                            >
                                                <AlertDialogOverlay>
                                                    <AlertDialogContent>
                                                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                                                        Delete
                                                        </AlertDialogHeader>

                                                        <AlertDialogBody>
                                                        Are you sure? You cant undo this action.
                                                        </AlertDialogBody>

                                                        <AlertDialogFooter>
                                                        <Button ref={cancelRef} onClick={onClose}>
                                                            Cancel
                                                        </Button>
                                                        <Button colorScheme='red' onClick={onClose} ml={3}>
                                                            Delete
                                                        </Button>
                                                        </AlertDialogFooter>
                                                    </AlertDialogContent>
                                                </AlertDialogOverlay>
                                            </AlertDialog>
                                        </Box>                              
                                    </HStack>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </AuthDashboard>
    )
}

export default Projects