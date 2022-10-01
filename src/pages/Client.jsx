import { Box, Button, Flex, Image, Input, Spacer, Text } from "@chakra-ui/react"
import { Sidebar } from "../components/Sidebar"
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import { CreateTag } from "../components/createtags";

export const Client =()=>{
    const [open, setOpen] = useState(false)
    return(
        <>
         <Flex>
          <Box w={"15%"} height="100vh" >
             <Sidebar />
            </Box>    
          <Box w="85%">
          <Flex boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}   alignItems="center"  p="10px"  >
               
               <Text fontWeight="Bold" ml="15px" mr="20px" textAlign={"center"} >Client</Text>
                <Flex position={"relative"}>
                <BiSearch style={{position: "absolute", top:"30%", fontSize: "20px", marginLeft:"5px", boxSizing: "border-box"}} />
                <Input _hover={"none"} borderColor={"black"}  pl={"30px"} boxSizing= "border-box"  placeholder="Find client..." />
                </Flex>
                <Spacer />
                <Button color="white" backgroundColor={"#E57CD8"} >+ New client</Button>
            </Flex>
          
          
            <Box  boxShadow={ "rgba(149, 157, 165, 0.2) 0px 8px 24px"} h="450px" placeItems={"center"} margin={"auto"} border={'1px solid white '} width={"70%"}>
            
            <Image  margin={"auto"} marginTop="100px" width={"125px"} src="https://web-assets.toggl.com/app/assets/images/61ce0ce0f6d73773.png" />  

                     <Text mt="25px" fontWeight={"700"}>Track work by client</Text>  
                     <Text color={"grey"} lineHeight={"1rem"} fontSize={"15px"}> Categorize your time entries by clinet for easy billing</Text> 

                     <Button onClick={()=>setOpen(!open)} marginTop={"22px"} mb="5px" color={"white"} backgroundColor={"#E57CD8"} borderRadius={"25px"} h="40px">Create one</Button>
                     {
                         open &&  <CreateTag open={open} setopen={setOpen} tagline={"New Client"} textB = {"Create"} plach={"New Client ..."} />
                       }
                     <Text display={"block"} as="u" color={"#E57CD8"} cursor="pointer" > Learn more</Text>
            </Box>
          
          </Box>
          
         </Flex>

      
        
        </>
    )
}