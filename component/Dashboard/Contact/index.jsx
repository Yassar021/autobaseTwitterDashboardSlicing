import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, Button, HStack, Image, Link, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react"
import {AddIcon,} from "@chakra-ui/icons"
import { useRef } from "react"
import AuthDashboard from "../../../layout/authDashboard"

const Contact = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef()

    return ( 
        <AuthDashboard pageTitle={'Manage Contact'}>
            <Box>
                <Text fontSize={'28px'} fontWeight='700' fontFamily={'DM Sans'} color='#6484AA'>MANAGE CONTACT</Text>
            </Box>

            <Box  mt='48px'>
                
                <TableContainer fontFamily={'DM Sans'}>
                    <Table size='lg' variant='simple'>
                        {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                        <Thead>
                            <Tr>
                                <Th color={'#6484AA'} fontSize='16px'>ID</Th>
                                <Th color={'#6484AA'} fontSize='16px'>Name</Th>
                                <Th color={'#6484AA'} fontSize='16px'>Email</Th>
                                <Th color={'#6484AA'} fontSize='16px'>Subject</Th>
                                <Th color={'#6484AA'} fontSize='16px'>Message</Th>
                                <Th color={'#6484AA'} fontSize='16px'>Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>1</Td>
                                <Td >Ahmad Muyassar</Td>
                                <Td>work@gmail.com</Td>
                                <Td>Lorem ipsum dolor sit.</Td>
                                <Td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, sunt.</Td>
                                <Td>
                                    <HStack spacing={'16px'}>
                                        {/* <Link href='/editTeams' _hover={{textDecoration:'none'}}>
                                            <Button colorScheme={'messenger'}
                                                size='md'
                                                w='80px'
                                                >
                                                Edit
                                            </Button> 
                                        </Link>                                          */}
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
export default Contact