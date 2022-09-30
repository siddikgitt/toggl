import { Box, Button, Center, Divider, Flex, Image, Input, Spacer, Text } from '@chakra-ui/react'
import {AiTwotoneSetting,AiOutlineTeam,AiFillProject} from "react-icons/ai"
import {BsFillClockFill,BsFillFilePersonFill,BsPersonCircle} from "react-icons/bs"
import {TbReport} from "react-icons/tb"
import {MdOutlineInsights} from "react-icons/md";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const Sidebar=()=>{
    const navigate=useNavigate()
    return(
        <>
         <Box position='fixed' bg='rgb(44,19,56)' h='calc(100vh)' w='15%' paddingLeft='20px' paddingRight='20px'>
            <Image style={{cursor:"pointer"}} onClick={()=>navigate("/")} src='https://freight.cargo.site/t/original/i/b3ce721155f60e21682970f5e714309bac4224c4b3891f0d387519c0181ca9e6/Frame-14x-100.jpg' alt='logo'/>
            <Text marginBottom='10px' textAlign='left' color='rgb(130, 113, 136)'>TRACK</Text>
            <Flex  style={{cursor:"pointer"}} onClick={()=>navigate("/timer")} marginBottom='20px' alignItems='center'>
               <BsFillClockFill color='white'/>
               <Text paddingLeft='7px' color='white'>Timer</Text>
            </Flex>
            <Text marginBottom='10px' textAlign='left' color='rgb(130, 113, 136)'>ANALYZE</Text>
            <Flex  style={{cursor:"pointer"}} onClick={()=>navigate("/reports")} alignItems='center'>
               <TbReport color='white'/>
               <Text paddingLeft='7px' color='white'>Reports</Text>
            </Flex>
            <Flex marginBottom='20px' alignItems='center'>
               <MdOutlineInsights  color='white'/>
               <Text paddingLeft='7px' color='white'>Insights</Text>
            </Flex>
            <Text marginBottom='10px' textAlign='left' color='rgb(130, 113, 136)'>MANAGE</Text>
            <Flex alignItems='center'>
            <AiFillProject style={{color:"white",marginRight:'7px'}}/>
               <Text color='white'>Projects</Text>
            </Flex>
            <Flex alignItems='center'>
            <BsFillFilePersonFill style={{color:"white",marginRight:'7px'}}/>
               <Text color='white'>Clients</Text>
            </Flex>
            <Flex marginBottom='20px' alignItems='center'>
            <AiOutlineTeam style={{ color:"white",marginRight:'7px'}}/>
               <Text color='white'>Team</Text>
            </Flex>
            <Text marginBottom='10px' textAlign='left' color='rgb(130, 113, 136)'>WORKSPACE</Text>
            <Flex paddingLeft='5px' border='1px solid white' borderRadius='5px' alignItems='center'>
                <BsPersonCircle color='white'/>
                <Box paddingLeft='10px'>
                    <Text textAlign='left'  color='white'>abc</Text>
                    <Text textAlign='left'  color='white'>abc@gmail.com</Text>
                </Box>
            </Flex>
            <Button w='100%' marginTop='20px'>Logout</Button>

        </Box>
        </>
    )
}