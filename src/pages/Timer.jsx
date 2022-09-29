import { Box, Button, Center, Divider, Flex, Input, Spacer, Text } from '@chakra-ui/react'
import {BsFillCreditCardFill,BsFillTagFill} from "react-icons/bs";
import {BiDollar} from "react-icons/bi";
import {AiTwotoneSetting} from "react-icons/ai"
import {RiArrowDropDownLine} from "react-icons/ri"
import React, { useState } from 'react';
import { Calendar } from '../components/Calendar';
import { Stopwatch } from '../components/Stopwatch';
export const Timer=()=>{
    
    return (
        <>
        <Box  bg="rgb(254,249,247)">
            
            <Flex bg='white' boxShadow='md' alignItems='center' h='84px' paddingLeft='20px' paddingRight='20px' >
                <Input border='none' w='70%' fontFamily='Roboto, Helvetica, sans-serif' placeholder='What are you working on?'/>
                <Spacer/>
                <BsFillCreditCardFill size='20' color='rgb(126,110,133)'/>
                <Spacer/>
                <BsFillTagFill size='20' color='rgb(126,110,133)'/>
                <Spacer/>
                <BiDollar size='20' color='rgb(126,110,133)'/>
                <Spacer/>
                <Box>
                    <Stopwatch/>
                </Box>
                <Spacer/>
            </Flex>
            <Flex paddingTop='30px' paddingBottom='30px' alignItems='center' paddingLeft='20px' paddingRight='20px' >
                <Text paddingRight="40%">THIS WEEK</Text>
                <Box>
                <Center color='black' height='30px' paddingRight='30px'>
                 <Divider  orientation='vertical' />
                </Center>
                </Box>
                <Text>WEEK TOTAL</Text>
                <Spacer/>
                <Text>
                   00:00:00
                </Text>
                <Spacer/>
                <Box>
               
                <Calendar/>
                </Box>
                <Spacer/>
                <AiTwotoneSetting/>
                <Spacer/>
                <Flex alignItems='center'>
                <Text>
                    WEEK VIEW
                   
                </Text>
                <RiArrowDropDownLine/>
                </Flex>
                <Spacer/>
                
            </Flex>
         
        </Box>
        </>
    )
}

