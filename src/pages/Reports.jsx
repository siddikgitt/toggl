import { Box, Divider, Flex, Input, Spacer, Text } from "@chakra-ui/react"
import {FaSave} from "react-icons/fa";
import {HiDownload} from "react-icons/hi";
import {AiOutlineTeam,AiFillProject} from "react-icons/ai";
import {BsFillFilePersonFill,BsFillTagFill} from "react-icons/bs";
import {ImCheckboxChecked} from "react-icons/im";
import {BiDollarCircle} from 'react-icons/bi';
import {TiSortAlphabetically} from "react-icons/ti"
import { Sidebar } from "../components/Sidebar";
export const Reports=()=>{
    return (
        <>
        <Flex>
            <Sidebar/>
         <Box w='85%' marginLeft='15%'  bg="rgb(254,249,247)" paddingBottom='30px'  >
            
            <Flex bg='white'  alignItems='center' h='66px' paddingLeft='20px' paddingRight='20px'>
                <Text>Reports</Text>
                <Spacer/>
                <Text color='rgb(149,137,155)'>Summary</Text>
                <Spacer/>
                <Text color='rgb(149,137,155)'>Detailed</Text>
                <Spacer/>
                <Text color='rgb(149,137,155)'>Weekly</Text>
                <Spacer/>
                <Text color='rgb(149,137,155)' marginRight='50%'>Saved</Text>
                <Spacer/>
                <FaSave style={{color:'rgb(149,137,155)'}}/>
                <Spacer/>
                <HiDownload style={{color:'rgb(149,137,155)'}}/>
                <Spacer/>

            </Flex>
            <Divider orientation='horizontal' />
            <Flex alignItems='center' bg='white' boxShadow='md' h='50px' paddingLeft='20px' paddingRight='40%'>
                <Text color='rgb(149,137,155)'>Filter by:</Text>
                <Spacer/>
                <Flex alignItems='center'>
                    <AiOutlineTeam style={{border:"1px solid", background:"rgb(149,137,155)",color:"white",marginRight:'7px'}}/>
                    <Text color='rgb(149,137,155)'>Team</Text>
                </Flex>
                <Spacer/>
                <Flex alignItems='center'>
                    <BsFillFilePersonFill style={{border:"1px solid", background:"rgb(149,137,155)",color:"white",marginRight:'7px'}}/>
                    <Text color='rgb(149,137,155)'>Client</Text>
                </Flex>
                <Spacer/>
                <Flex alignItems='center'>
                    <AiFillProject style={{border:"1px solid", background:"rgb(149,137,155)",color:"white",marginRight:'7px'}}/>
                    <Text color='rgb(149,137,155)'>Project</Text>
                </Flex>
                <Spacer/>
                <Flex alignItems='center'>
                    <ImCheckboxChecked style={{border:"1px solid", background:"rgb(149,137,155)",color:"white",marginRight:'7px'}}/>
                    <Text color='rgb(149,137,155)'>Task</Text>
                </Flex>
                <Spacer/>
                <Flex alignItems='center'>
                    <BiDollarCircle style={{border:"1px solid", background:"rgb(149,137,155)",color:"white",marginRight:'7px'}}/>
                    <Text color='rgb(149,137,155)'>Billable</Text>
                </Flex>
                <Spacer/>
                <Flex alignItems='center'>
                    <BsFillTagFill style={{border:"1px solid", background:"rgb(149,137,155)",color:"white",marginRight:'7px'}}/>
                    <Text color='rgb(149,137,155)'>Tag</Text>
                </Flex>
                <Spacer/>
                <Flex alignItems='center'>
                    <TiSortAlphabetically style={{border:"1px solid", background:"rgb(149,137,155)",color:"white",marginRight:'7px'}}/>
                    <Text color='rgb(149,137,155)'>Description</Text>
                </Flex>
            </Flex>
            </Box>
            </Flex>
        </>
    )
}