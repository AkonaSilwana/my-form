import React from 'react'
import {ChakraProvider,Box, useDisclosure,Modal, ModalOverlay, ModalContent,ModalHeader,ModalFooter,
   ModalBody, ModalCloseButton,Text , Button} from '@chakra-ui/react'


function ModalUI(props) {
   const { isOpen, onOpen, onClose } = useDisclosure() 
   //console.log("Check TYPE: ", useDisclosure())
   
  return (
    
     <>
       <Button colorScheme="teal" onClick={onOpen}>Submit</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>BIO</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           <Text>The name is: {props.name}</Text>
           <Text>The email is: {props.email}</Text>
           <Text>The age is: {props.age}</Text>
          </ModalBody>
           <Text></Text>
          <ModalFooter>
           
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close Dialog
            </Button>
           
          </ModalFooter>
        </ModalContent>
      </Modal>
    
      </>
  )
   
}

export default ModalUI