import { Box, Button, Center, Divider, Flex, Image, Input, Spacer, Table, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import {BsFillCreditCardFill,BsFillTagFill} from "react-icons/bs";
import {BiDollar} from "react-icons/bi";
import {AiTwotoneSetting,AiOutlineTeam,AiFillProject} from "react-icons/ai"
import {RiArrowDropDownLine} from "react-icons/ri"
import {BsFillClockFill,BsFillFilePersonFill,BsPersonCircle} from "react-icons/bs"
import {TbReport} from "react-icons/tb"
import {MdOutlineInsights} from "react-icons/md";
import React, { useState } from 'react';
import { Calendar } from '../components/Calendar';
import { Stopwatch } from '../components/Stopwatch';
import { Sidebar } from '../components/Sidebar';
export const Timer=()=>{
    
    return (
        <>
        <Flex>
       <Sidebar/>
        <Box w='85%' h='calc(100vh)' marginLeft='15%'  bg="rgb(254,249,247)" paddingBottom='30px'>
            
            <Flex  bg='white' boxShadow='md' alignItems='center' h='84px' paddingLeft='20px' paddingRight='20px' >
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
            <Flex  paddingTop='30px' paddingBottom='30px' alignItems='center' paddingLeft='20px' paddingRight='20px' >
                <Text paddingRight="40%">THIS WEEK</Text>
                <Box h='20px' borderLeft='2px solid rgb(126,110,133)' paddingRight='5%'>
                {/* <Center color='black' height='30px' paddingRight='30px'>
                 <Divider  orientation='vertical' />
                </Center> */}
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
            <Box>
                <Text paddingLeft='20px' paddingBottom="5px" textAlign='left' color='rgb(126,110,133)'>(NO PROJECT)</Text>
            <hr
        style={{
          background: 'rgb(126,110,133)',
          color: 'rgb(126,110,133)',
        //   borderColor: 'lime',
          height: '3px',
         marginRight:"20px",
         marginLeft:"20px",
         marginBottom:"30px"
        }}
      />
            </Box>
  <TableContainer bg='white'>
  <Table size='sm'>
    <Thead>
      <Tr>
        <Th>PROJECT</Th>
        <Th>CLIENT</Th>
        <Th>TIME STATUS</Th>
        <Th>BILLABLE STATUS</Th>
        <Th>TEAM</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Toggl</Td>
        <Td>Masai</Td>
        <Td>5 days</Td>
        <Td>00</Td>
        <Td>spartan</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
         
        </Box>
        </Flex>
        </>
    )
}

