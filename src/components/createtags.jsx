import { Button, FormControl, Input, Modal, 
         ModalBody, ModalCloseButton, 
         ModalContent, ModalHeader, ModalOverlay, } from "@chakra-ui/react";
import React from "react";

export const  CreateTag=({open, setopen, textB , tagline, plach }) =>{
      
    const onClose = ()=>{
        setopen(false)
    }
  
    const initialRef = React.useRef(null)
   
    return (
      <>
       
  
        <Modal
          initialFocusRef={initialRef}
          isOpen={open}
          onClose={onClose}
          size= "sm"
          placeItem = "center"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{tagline}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl mb="20px">
              
                <Input ref={initialRef} placeholder={plach} />
              </FormControl>
             
              <Button backgroundColor="#E57CD8" color="white" w="100%" onClick={onClose}> {textB} </Button>
            </ModalBody>
  
            
          </ModalContent>
        </Modal>
      </>
    )
  }