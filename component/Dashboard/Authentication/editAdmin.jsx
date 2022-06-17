import { Box, Button, Flex, FormControl, Input, Text, useToast } from "@chakra-ui/react"
import AuthDashboard from "../../../layout/authDashboard"

const EditAdmin = () => {
    const toast = useToast({
        position: 'top',
    })
    return ( 
        <AuthDashboard pageTitle={'Edit'}>
            <Flex direction={'column'} w='600px' justifyContent={'center'}>
                <Box>
                    <Text fontSize={'28px'} fontWeight='700' fontFamily={'DM Sans'} color='#6484AA'>EDIT ADMIN</Text>
                </Box>
                <Box my='48px'>
                    <FormControl isRequired>
                        <Input borderRadius={'8px'} h='56px'  borderColor={'#6484AA'} id='name' _placeholder={{color:'#6484AA',fontSize:'18px'}} placeholder="Name"  />
                    </FormControl>
                    <FormControl  my='16px'  isRequired>
                        <Input borderRadius={'8px'} h='56px'  borderColor={'#6484AA'} id='username' _placeholder={{color:'#6484AA',fontSize:'18px'}} placeholder="Username"  />
                    </FormControl>
                    <FormControl isRequired>
                        <Input borderRadius={'8px'} h='56px'  borderColor={'#6484AA'} id='password' _placeholder={{color:'#6484AA',fontSize:'18px'}} placeholder="Password"  />
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

export default EditAdmin