import { Box, Button, Flex, FormControl, HStack, Image, Input, Text, useToast } from "@chakra-ui/react"
import AuthDashboard from "../../../layout/authDashboard"

const AddProject = () => {
    const toast = useToast({
        position: 'top', 
    })
    return ( 
        <AuthDashboard pageTitle={'Add Project'}>
            <Flex direction={'column'} w='600px' justifyContent={'center'}>
                <Box>
                    <Text fontSize={'28px'} fontWeight='700' fontFamily={'DM Sans'} color='#6484AA'>ADD PROJECTS</Text>
                </Box>
                <Box my='48px'>
                    {/* Image */}
                    <HStack spacing='16px'>
                        <Image src='/profile.png' alt='Image Project' w='150px' h='150px' />
                        <Button colorScheme='teal' variant='solid'>
                            Upload Image
                        </Button>
                    </HStack>
                    <FormControl mt='16px' isRequired>
                        <Input borderRadius={'8px'} h='56px'  borderColor={'#6484AA'} id='name' _placeholder={{color:'#6484AA',fontSize:'18px'}} placeholder="Name"  />
                    </FormControl>
                    <FormControl  my='16px'  isRequired>
                        <Input borderRadius={'8px'} h='56px'  borderColor={'#6484AA'} id='description' _placeholder={{color:'#6484AA',fontSize:'18px'}} placeholder="Description"  />
                    </FormControl>
                    <FormControl isRequired>
                        <Input borderRadius={'8px'} h='56px'  borderColor={'#6484AA'} id='category' _placeholder={{color:'#6484AA',fontSize:'18px'}} placeholder="Category"  />
                    </FormControl>
                    <FormControl my='16px' isRequired>
                        <Input borderRadius={'8px'} h='56px'  borderColor={'#6484AA'} id='client' _placeholder={{color:'#6484AA',fontSize:'18px'}} placeholder="Client"  />
                    </FormControl>
                    <FormControl isRequired>
                        <Input borderRadius={'8px'} h='56px'  borderColor={'#6484AA'} id='tech' _placeholder={{color:'#6484AA',fontSize:'18px'}} placeholder="Technology"  />
                    </FormControl>
                </Box>
                <Button colorScheme={'green'}
                    size='md'
                    w='80px'
                    onClick={() =>
                    toast({
                        title: 'Data Saved.',
                        description: "We've saved your users for you.",
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                    })}>
                        Save
                </Button>
            </Flex>
        </AuthDashboard>
    )
}

export default AddProject