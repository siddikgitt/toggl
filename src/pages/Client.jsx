import { Box, Button, Divider, Flex, Image, Input, Popover, PopoverContent, PopoverTrigger, Spacer, Spinner, Text, Wrap, WrapItem } from "@chakra-ui/react"
import { Sidebar } from "../components/Sidebar"
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import { CreateTag } from "../components/createtags";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
// https://intense-escarpment-00926.herokuapp.com/clients
 export const client  = async (token , text)=>{
     return  await  axios({
       url: ` https://intense-escarpment-00926.herokuapp.com/clients`,
       method: 'post',
       headers: {
        token: token
       },
       data: { 
         name : text
       }
     })
     
}
 export const getData = async(token)=>{
     return await axios.get(`https://intense-escarpment-00926.herokuapp.com/clients`,{
        headers :{
           token: token
        } 
      })
     
 }

 export const deletePost = async(token, id)=>{
  return await axios.delete(`https://intense-escarpment-00926.herokuapp.com/clients/${id}`,{
     headers :{
        token: token
     } 
   })
  
}

export const Client =()=>{
    const {token} = useSelector((store)=> store.auth)
    const [open, setOpen] = useState(false)
    const [data, setData] = useState([])
  

    const  handleData = ()=>{
      
       getData(token).then((res)=>{
          setData(res.data)
       });
      
    }
 const handleDelete = (id)=>{
  console.log("under upgrade....")
 }
    
    useEffect(()=>{
        handleData();
    }, [])
   
    
    
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
                <Button onClick={()=>setOpen(!open)} color="white" backgroundColor={"#E57CD8"} >+ New client</Button>
            </Flex>
         
          {
             data.length ===0 ?  <Box  boxShadow={ "rgba(149, 157, 165, 0.2) 0px 8px 24px"} h="450px" placeItems={"center"} margin={"auto"} mt ="60px" border={'1px solid white '} width={"70%"}>
            
            <Image  margin={"auto"} marginTop="100px" width={"125px"} src="https://web-assets.toggl.com/app/assets/images/61ce0ce0f6d73773.png" />  

                     <Text mt="25px" fontWeight={"700"}>Track work by client</Text>  
                     <Text color={"grey"} lineHeight={"1rem"} fontSize={"15px"}> Categorize your time entries by clinet for easy billing</Text> 

                     <Button onClick={()=>setOpen(!open)} marginTop={"22px"} mb="5px" color={"white"} backgroundColor={"#E57CD8"} borderRadius={"25px"} h="40px">Create one</Button>
                     {
                         open &&  <CreateTag open={open} setopen={setOpen} tagline={"New Client"} textB = {"Create"} plach={"New Client ..."} func = {client} token ={token} handleData={handleData} />
                       }
                     <Text display={"block"} as="u" color={"#E57CD8"} cursor="pointer" > Learn more</Text>
            </Box> : <Box p="10px 10px 10px 20px" boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"} marginTop="20px">
              <Text fontWeight={"500"} mb={"15px"} textAlign={"justify"}>ALL</Text>
              <Divider orientation='horizontal' mb={"20px"} /> 
                  <Wrap spacing={"30px"}>

                    {
                      data?.map((item)=>(
                        <WrapItem key={item.Divider}>
                      
                       <Popover>
                          <PopoverTrigger>
                             <Button boxSizing="border-Box"> {item.name} <BsThreeDotsVertical style={{margin: "0px 0px 0px 5px"}} />   </Button>
                           </PopoverTrigger>
                           <PopoverContent p="5px" w="100px">
                           <Button bg="white" _hover={"none"}> Edit </Button>
                           <Button onClick={()=>handleDelete(item._id)} color="red" bg="white" _hover={"none"}> Delete </Button>
                           </PopoverContent>
                        </Popover>
                       </WrapItem>
                      ))
                    }
                      
                  </Wrap>
                  {
                         open &&  <CreateTag open={open} setopen={setOpen} tagline={"New Client"} textB = {"Create"} plach={"New Client ..."} func ={client} token ={token} handleData={handleData}  />
                       }
            </Box>
          }
          
           
          
          </Box>
          
         </Flex>

      
        
        </>
    )
}