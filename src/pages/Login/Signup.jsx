import { Box, Button, Flex, Image, Input, Spacer, Text } from "@chakra-ui/react"
import { useState } from "react";
import {Logo}   from "../../components/Navbar/Logo"
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import reviewBadges from "../../utils/./review-badges.avif"
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from '../../store/authSignup/authSignup.actions';


  export const Signup = ()=>{

    const dispatch =  useDispatch()
    const navigate = useNavigate();
    const auth = useSelector((store)=>store.authSignup.token)
    const err = useSelector((store)=>store.authSignup.error)
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name ,setName] = useState("")
    const handleEmail= (e)=>{
       setEmail(e.target.value);
  
    };
    const handlePassWord=(e)=>{
      setPassword(e.target.value)
    };
    const handleName=(e)=>{
      setName(e.target.value)
    }
  
    const handleSignup = ()=>{
      dispatch(signup({
        name:name,
        email: email, 
        password: password,
                }))
    }  
    if(auth){
        navigate("/timer")
    }

    


  
    return (
        <>
          <Box p="25px" bg={"rgb(65, 42, 76)"}  >
                
                <Box p="45px" >
                   <Link to="/"><Logo h="35px" /></Link>
                </Box>
          
                <Box padding={"25px"} ml="93px" color="white">
                <Text  mb="30px" fontSize={"40px"} textAlign={"start"} >Sign up form <Text color="#E57CD8" as="em">Free</Text> Toogle Track account</Text>
                <Text lineHeight={"2rem"} fontSize={"22px"} textAlign={"start"} as="p">
                    All plans come with a free,  30-day trial of Toggl Track Premium—no credit card required.
                    
                </Text> 
                <Text mb="20px"  lineHeight={"2rem"} fontSize={"22px"} textAlign={"start"} as="p">Upgrade at the end of the trial or continue using Track for free.</Text>
                <Text textAlign={"start"} fontSize={"22px"} >Already have an account? <Text fontSize={"22px"} as="u" color="#E57CD8">Log in here.</Text></Text> 
                </Box>

            <Flex p="40px"  >
            <Box  boxSizing='border-box' color={"white"} p={"58px 45px 45px"} backgroundColor={"rgb(44, 19, 56)"}  m={"auto"}  w="573px">
                      <Flex justifyContent={"space-around"}>
                        <Button color="black" cursor={"pointer"} borderRadius={"30px"} textAlign={"center"} p="25px 30px"><Box p="0px 5px"><FcGoogle size={"25px"} /></Box> Login via Google</Button>
                        <Button color="black" cursor={"pointer"} borderRadius={"30px"} textAlign={"center"} p="25px 35px"> <Box><AiFillApple size={"30px"} color="black" p="0px 5px"/></Box>  Login via Apple</Button>
                      </Flex>
                     
                       <Box mt={"50px"} padding={"20px"}>

                       <Box mb={"40px"} >
                         <Text mb={"8px"} textAlign={"start"} >
                            Name
                          </Text>
                          <Input onChange={handleName} border={"2px"} borderRadius={0} placeholder='Name' type="text" />
                         </Box>
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

                           <Button onClick={handleSignup} _hover={{bg: "rgb(65, 42, 76)" }} p="25px 40px" borderRadius={"30px"} w="100%"  margin="auto" backgroundColor={"#E57CD8"}> Sign up via email </Button>
                           <Box mt={"40px"}>
                            <Text fontSize={"12px"} _hover={{color: '#E57CD8'}} cursor={"pointer"} gap="1rem" textAlign={"start"} >
                            By signing up, you agree to our terms of service, privacy policy and to receiving marketing communication from Toggl Track. You can opt out anytime.
                            </Text>
                          </Box>

                       </Box>
                      </Box> 
       
                  <Box pt="40px"  w="40%" color="white"  >
                         <Text  textAlign={"justify"} fontSize={"5xl"}>"</Text>
                        <Text mb="30px" mt="-30px" width={"80%"} textAlign={"justify"} fontSize={"2xl"}>
                        Toggle Track has a very straightforward interface. 
                        It's easy to start, stop and edit time entries and to
                        review your own work and the work of colleagues.
                        </Text>
                        <Text width={"80%"} textAlign={"justify"} fontSize={"2xl"} >
                        <Text color="rgb(255, 222, 145)" as="em">It just works,</Text> even in a team where some members find new interfaces challenging.
                        </Text>
                        <Text mt="20px" mb="25px" width={"80%"} textAlign={"justify"} fontSize={"l"}>— Verified G2Crowd review. 5/5 stars.</Text>
                        <Box  p="20px" m="auto">
                            <Image m="auto" width={"75%"} src={reviewBadges} alt ="reviewbadge" />
                        </Box>
                    </Box>    

            </Flex>
          

           
          </Box>
          <div
      
        style={{
          width:"100%",
          backgroundColor: "#E57CD8",
          fontSize: "0.875rem",
          lineHeight: "1",
          alignItems: "center",
          display: "flex",
          color: "#2C1338",
          padding: "23px",
          display: "flex",
          justifyContent: "space-between",
        
        }

    }
      >
        <span>© 2022 Toggl. All Rights Reserved</span>
            
               <span>Legal Terms</span>
       
        
      </div>

        </>
    )
  }