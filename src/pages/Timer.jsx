import { Box, Center, Divider, Flex, Input, Spacer, Text } from '@chakra-ui/react'
import {BsFillCreditCardFill,BsFillTagFill} from "react-icons/bs";
import {BiDollar} from "react-icons/bi";
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
export const Timer=()=>{
    const [value, onChange] = useState(new Date());
    return (
        <>
        <Box>
            <Flex alignItems='center' h='84px' paddingLeft='20px' paddingRight='20px' >
                <Input border='none' w='70%' fontFamily='Roboto, Helvetica, sans-serif' placeholder='What are you working on?'/>
                <Spacer/>
                <BsFillCreditCardFill/>
                <Spacer/>
                <BsFillTagFill/>
                <Spacer/>
                <BiDollar/>
                <Spacer/>
                <Box>Timer</Box>
            </Flex>
            <Flex paddingLeft='20px' paddingRight='20px' >
                <Text paddingRight="40%">THIS WEEK</Text>
                <Box>
                <Center height='30px' paddingRight='10px'>
                 <Divider color='red' orientation='vertical' />
                </Center>
                </Box>
                <Text>WEEK TOTAL</Text>
                <Spacer/>
                <Box>
                <Calendar onChange={onChange} value={value} />
                </Box>
            </Flex>
        </Box>
        </>
    )
}

