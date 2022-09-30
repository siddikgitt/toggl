import { Box, Button, Divider, Flex, Input, Spacer, Text } from "@chakra-ui/react"
import {MdSecurity} from "react-icons/md";
import {GoSearch} from 'react-icons/go';
import {RiSuitcaseFill} from "react-icons/ri";
import {FaPaperPlane} from "react-icons/fa";
export const Organization=()=>{
    return(
        <>
        <Box  bg="rgb(254,249,247)" paddingBottom='30px'  >
            
            <Flex bg='white'  alignItems='center' h='66px' paddingLeft='20px' paddingRight='20px'>
                <Text>Organization</Text>
                <Spacer/>
                <Text color='rgb(149,137,155)'>Workspaces</Text>
                <Spacer/>
                <Text color='rgb(149,137,155)'>Team</Text>
                <Spacer/>
                <Text color='rgb(149,137,155)'>Groups</Text>
                <Spacer/>
                <Text color='rgb(149,137,155)' >Settings</Text>
                <Spacer/>
                <Text color='rgb(149,137,155)' paddingRight='40%'>Subscription</Text>
                <Spacer/>
                <Button bg='rgb(221,111,209)'>
                    <FaPaperPlane style={{paddingRight:'4px'}}/>
                     Invite members
                </Button>

            </Flex>
            <Divider orientation='horizontal' />
            <Flex alignItems='center' bg='white' boxShadow='md' h='50px' paddingLeft='20px' paddingRight='20px'>

                <Text w='100px' color='rgb(149,137,155)'>Filter by:</Text>
                <Spacer/>
                <Flex alignItems='center' marginRight='20px'>
                    <MdSecurity style={{border:"1px solid", background:"rgb(149,137,155)",color:"white",marginRight:'7px'}}/>
                    <Text color='rgb(149,137,155)'>Access</Text>
                </Flex>
                <Spacer/>
                <Flex alignItems='center' marginRight='20px'>
                    <GoSearch style={{border:"1px solid", background:"rgb(149,137,155)",color:"white",marginRight:'7px'}}/>
                    <Text color='rgb(149,137,155)'>Groups</Text>
                </Flex>
                <Spacer/>
                <Flex alignItems='center' marginRight='45%'>
                    <RiSuitcaseFill style={{border:"1px solid", background:"rgb(149,137,155)",color:"white",marginRight:'7px'}}/>
                    <Text color='rgb(149,137,155)'>Workspaces</Text>
                </Flex>
                <Spacer/>
                <Input w='290px' placeholder="Search members..."/>
                
            </Flex>
            </Box>
        </>
    )
}