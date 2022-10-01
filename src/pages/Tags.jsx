import { Box, Button, Flex, Image, Input, Spacer, Text } from "@chakra-ui/react"
import { Sidebar } from "../components/Sidebar"
import { BiSearch } from "react-icons/bi";
export const Tags = ()=>{

    return(
        <>
         <Flex>
          <Box w={"15%"} height="100vh" >
             <Sidebar />
            </Box>    
          <Box  w="85%">
          <Flex mb= "70px" boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}   alignItems="center"  p="10px"  >
               
               <Text fontWeight="semibold" ml="15px" mr="20px" textAlign={"center"} >Tags</Text>
                <Flex position={"relative"}>
                <BiSearch style={{position: "absolute", top:"30%", fontSize: "20px", marginLeft:"5px", boxSizing: "border-box"}} />
                <Input _hover={"none"} borderColor={"black"}  pl={"30px"} boxSizing= "border-box"  placeholder="Find tags..." />
                </Flex>
                <Spacer />
                <Button color="white" backgroundColor={"#E57CD8"} >+ New tag</Button>
            </Flex>


            <Box  boxShadow={ "rgba(149, 157, 165, 0.2) 0px 8px 24px"} h="450px" placeItems={"center"} margin={"auto"} border={'1px solid white '} width={"70%"}>
            
            <Image  margin={"auto"} marginTop="100px" width={"125px"} src="https://web-assets.toggl.com/app/assets/images/61ce0ce0f6d73773.png" />  

                     <Text mt="25px" fontWeight={"700"}>Categorize your time and get more insights</Text>  
                     <Text fontWeight={"500"} m="auto" w="65%"  color={"grey"} lineHeight={"1rem"} fontSize={"15px"}> Tags allow you to add even more context to time entries, beyond clients 
                           and projects.</Text> 

                     <Button  marginTop={"22px"} mb="5px" color={"white"} backgroundColor={"#E57CD8"} borderRadius={"25px"} h="40px">Create one</Button>
                     <Text display={"block"} as="u" color={"#E57CD8"} cursor="pointer" > Learn more</Text>
            </Box>



          
          </Box>
        
         </Flex>
        
        
        
        
        </>
    )
}