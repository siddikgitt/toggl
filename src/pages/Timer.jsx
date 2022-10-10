import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Image,
  Input,
  Select,
  Spacer,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { BsFillCreditCardFill, BsFillTagFill } from "react-icons/bs";
import { BiDollar } from "react-icons/bi";
import { AiTwotoneSetting, AiOutlineTeam, AiFillProject } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import {
  BsFillClockFill,
  BsFillFilePersonFill,
  BsPersonCircle,
} from "react-icons/bs";
import { TbReport } from "react-icons/tb";
import { MdOutlineInsights } from "react-icons/md";
import React, { useEffect, useState } from "react";
import { Calendar } from "../components/Calendar";
import { Stopwatch } from "../components/Stopwatch";
import { Sidebar } from "../components/Sidebar";
import axios from "axios";
export const Timer = () => {
  const [inputData, setInputData] = useState("");
  console.log(inputData);

  const [data, setdata] = useState([]);
  const getData = async () => {
    //   "https://mysterious-shore-42044.herokuapp.com/tasks",

    let a = await axios.get(`http://localhost:8080/tasks`, {
      headers: {
        token: localStorage.getItem("token"),
      },
    });
    setdata(a.data);
  };

  const updateDataCount = () => {
    getData();
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Flex>
        <Sidebar />
        <Box
          w="85%"
          h="calc(100vh)"
          marginLeft="15%"
          bg="rgb(254,249,247)"
          paddingBottom="30px"
        >
          <Flex
            bg="white"
            boxShadow="md"
            alignItems="center"
            h="84px"
            paddingLeft="20px"
            paddingRight="20px"
          >
            <Select onChange={(e) => setInputData(e.target.value)} w="70%" placeholder="Select Task">
            {data.map((el) => (
              <option key={el._id} value={el._id}>{el.taskName}</option>
            ))}
            </Select>
            {/* <Input
              border="none"
              w="70%"
              fontFamily="Roboto, Helvetica, sans-serif"
              placeholder="What are you working on?"
              onChange={(e) => setInputData(e.target.value)}
            /> */}
            <Spacer />
            <BsFillCreditCardFill size="20" color="rgb(126,110,133)" />
            <Spacer />
            <BsFillTagFill size="20" color="rgb(126,110,133)" />
            <Spacer />
            <BiDollar size="20" color="rgb(126,110,133)" />
            <Spacer />
            <Box>
              <Stopwatch updateDataCount={updateDataCount} taskID={inputData} />
            </Box>
            <Spacer />
          </Flex>
          <Flex
            paddingTop="30px"
            paddingBottom="30px"
            alignItems="center"
            paddingLeft="20px"
            paddingRight="20px"
          >
            <Text paddingRight="40%">THIS WEEK</Text>
            <Box
              h="20px"
              borderLeft="2px solid rgb(126,110,133)"
              paddingRight="5%"
            >
              {/* <Center color='black' height='30px' paddingRight='30px'>
                 <Divider  orientation='vertical' />
                </Center> */}
            </Box>
            <Text>WEEK TOTAL</Text>
            {/* <Spacer />
            <Text>00:00:00</Text>
            <Spacer /> */}
            <Box paddingLeft={5}>
              <Calendar />
            </Box>
            <Spacer />
            <AiTwotoneSetting />
            <Spacer />
            <Flex alignItems="center">
              <Text>WEEK VIEW</Text>
              <RiArrowDropDownLine />
            </Flex>
            <Spacer />
          </Flex>
          <Box>
            {/* <Text
              paddingLeft="20px"
              paddingBottom="5px"
              textAlign="left"
              color="rgb(126,110,133)"
            >
              Flipkart PROJECT
            </Text> */}
            <hr
              style={{
                background: "rgb(126,110,133)",
                color: "rgb(126,110,133)",
                //   borderColor: 'lime',
                height: "3px",
                marginRight: "20px",
                marginLeft: "20px",
                marginBottom: "30px",
              }}
            />
          </Box>
          <TableContainer bg="white">
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th>Project Name</Th>
                  <Th>Task Name</Th>
                  <Th>Task Date</Th>
                  <Th>Start Time</Th>
                  <Th>End Time</Th>
                  <Th>Counter Time</Th>
                </Tr>
              </Thead>

              <Tbody>
                {data.map((el) => (
                  <Tr key={el.userID + Math.random()}>
                    <Td>{el.projectID.name}</Td>
                    <Td>{el.taskName}</Td>
                    <Td>{el.taskDate}</Td>
                    <Td>{el.startTime}</Td>
                    <Td>{el.endTime}</Td>
                    <Td>{el.counterTime}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Flex>
    </>
  );
};
