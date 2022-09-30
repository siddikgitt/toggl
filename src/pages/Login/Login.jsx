import { Box, Button, Center, Flex, Image, Input, Text } from '@chakra-ui/react';
import hero from '../../utils/./hero-laptops.avif';
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { TiLockClosed } from "react-icons/ti";
import { RiArrowDropRightFill } from "react-icons/ri";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const getUser = async()=>{
  let res =  await axios.get(``)
}


export const LoginPage =()=>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail= (e)=>{
     setEmail(e.target.value);

  };
  const handlePassWord=(e)=>{
    setPassword(e.target.value)
  };

    return(
        <>
           <Box background={"black"} position="relative" boxSizing='border-box'>  
                <Image src={hero} width="100%" height={"400px"} objectFit="cover" opacity="0.5"   />
                <Text  top={"130px"} left={"35%"} as={"h3"} fontSize="40px" color="white" position={"absolute"}>Log in to your account</Text>
                <Text  top={"190px"} color="white" fontSize="20px" left={"43%"} position={"absolute"}>Let's get tracking</Text>
            </Box>
            {/* ......... */}
           <Box mb="-50px" boxSizing='border-box' backgroundColor={"rgb(65, 42, 76)"}>
                  <Box zIndex={1} boxSizing='border-box' position={"relative"} transform={" translateY(-120px)"} color={"white"} p={"58px 45px 45px"} backgroundColor={"rgb(44, 19, 56)"}  m={"auto"}  w="673px">
                      <Flex justifyContent={"space-around"}>
                        <Button color="black" cursor={"pointer"} borderRadius={"30px"} textAlign={"center"} p="25px 40px"><Box p="0px 5px"><FcGoogle size={"25px"} /></Box> Login via Google</Button>
                        <Button color="black" cursor={"pointer"} borderRadius={"30px"} textAlign={"center"} p="25px 45px"> <Box><AiFillApple size={"30px"} color="black" p="0px 5px"/></Box>  Login via Apple</Button>
                      </Flex>
                       <Box mt={"50px"} padding={"20px"}>
                         <Box mb={"40px"} >
                         <Text mb={"8px"} textAlign={"start"} >
                            Email
                          </Text>
                          <Input onChange={handleEmail}  border={"2px"} borderRadius={0} placeholder='Email' type="email" />
                         </Box>
                         <Box mb={"10px"}>
                         <Text mb={"8px"} textAlign={"start"} >
                            PassWord
                          </Text>
                          <Input onChange={handlePassWord}  border={"2px"} borderRadius={0} placeholder='Password' type="password" />
                         </Box>
                         
                         <Box mb="30px" cursor={"pointer"}  textAlign={"end"}>Forget Password?</Box>

                          <Button _hover={{bg: "rgb(65, 42, 76)" }} p="25px 40px" borderRadius={"30px"} w="100%"  margin="auto" backgroundColor={"#E57CD8"}> Log in </Button>
                          <Box mt={"40px"}>
                            <Flex  _hover={{color: '#E57CD8'}} cursor={"pointer"} gap="1rem" alignItems={"center"} justifyContent="center">
                             <TiLockClosed size="20px" />   Company login (SSO)  <RiArrowDropRightFill size={"20px"} />
                            </Flex>
                          </Box>

                       </Box>
                      </Box> 
            
                      <Text mb="10px" color={"white"} textAlign={"center"} mt={"-50px"}>Don't have an account</Text>  
                            
                           <Link to="/signup"> <Button mb="80px" p="26px 25px" color={"white"} _hover={{bg: "rgb(65, 42, 76)" }} borderRadius={"30px"} backgroundColor={"#E57CD8"} >Sign up for free</Button></Link>
           </Box>

        </>
    )
}       