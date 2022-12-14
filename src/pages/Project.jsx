import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { FaSave } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { AiOutlineTeam, AiFillProject } from "react-icons/ai";
import { BsFillFilePersonFill, BsFillTagFill } from "react-icons/bs";
import { ImCheckboxChecked } from "react-icons/im";
import { BiDollarCircle } from "react-icons/bi";
import { TiSortAlphabetically } from "react-icons/ti";
import { Sidebar } from "../components/Sidebar";
import React, { useEffect, useState } from "react";
import { CreateProjects } from "../components/CreateProjects";
import axios from "axios";

export const project = async (text) => {
  let abc = localStorage.getItem("token");
  let data = await axios
    .post(
      "https://web-production-fc34.up.railway.app/project",
      { name: text },
      { headers: { token: abc } }
    )
    .then((res) => {
      // console.log(res.data);
      return res.data;
    });
  return data;
};
export const getData = async () => {
  let abc = localStorage.getItem("token");
  let data = await axios
    .get("https://web-production-fc34.up.railway.app/projects", { headers: { token: abc } })
    .then((res) => {
      //   console.log(res.data);
      return res.data;
    });
  return data;
};

export const deletePost = async (id) => {
  let abc = localStorage.getItem("token");
  let data = await axios
    .delete(`https://web-production-fc34.up.railway.app/clients/${id}`, { headers: { token: abc } })
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
};

export const projectfn = async (projectName, rate, days, clientID, teamID) => {
  let abc = localStorage.getItem("token");
  let data = await axios
    .post(
      "https://web-production-fc34.up.railway.app/projects",
      { clientID: clientID, team_memberID: teamID, fixedRate: rate, timeEstimate: days, name: projectName},
      { headers: { token: abc } }
    )
    .then((res) => {
      // console.log(res.data);
      return res.data;
    });
  return data;
};

export const Project = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  const postData = async (projectName, rate, days, clientID, teamID) => {
    await projectfn(projectName, rate, days, clientID, teamID);
    handleData();
  };

  const handleData = () => {
    getData().then((res) => {
      // console.log(res);
      setData(res);
    });
  };
  const handleDelete = (id) => {
    deletePost(id);
    handleData();
  };

  useEffect(() => {
    handleData();
    // console.log(data);
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
            alignItems="center"
            h="66px"
            paddingLeft="20px"
            paddingRight="20px"
          >
            <Text fontSize="25px" marginRight="80%">
              Projects
            </Text>
            <Spacer />
            <Button
              onClick={() => setOpen(!open)}
              color={"white"}
              backgroundColor={"#E57CD8"}
              borderRadius={"5px"}
              h="40px"
            >
              + New Project
            </Button>
            {open && (
              <CreateProjects
                open={open}
                setopen={setOpen}
                handleData={handleData}
                postData={postData}
              />
            )}

            <Spacer />
          </Flex>
          <Divider orientation="horizontal" />
          <Flex
            alignItems="center"
            bg="white"
            boxShadow="md"
            h="50px"
            paddingLeft="20px"
            paddingRight="50%"
            marginBottom="30px"
          >
            <Text color="rgb(149,137,155)">Filter by:</Text>
            <Spacer />
            <Flex alignItems="center">
              <AiOutlineTeam
                style={{
                  border: "1px solid",
                  background: "rgb(149,137,155)",
                  color: "white",
                  marginRight: "7px",
                }}
              />
              <Text color="rgb(149,137,155)">Team</Text>
            </Flex>
            <Spacer />
            <Flex alignItems="center">
              <BsFillFilePersonFill
                style={{
                  border: "1px solid",
                  background: "rgb(149,137,155)",
                  color: "white",
                  marginRight: "7px",
                }}
              />
              <Text color="rgb(149,137,155)">Client</Text>
            </Flex>
            <Spacer />
            <Flex alignItems="center">
              <AiFillProject
                style={{
                  border: "1px solid",
                  background: "rgb(149,137,155)",
                  color: "white",
                  marginRight: "7px",
                }}
              />
              <Text color="rgb(149,137,155)">Project Name</Text>
            </Flex>
            <Spacer />

            <Flex alignItems="center">
              <BiDollarCircle
                style={{
                  border: "1px solid",
                  background: "rgb(149,137,155)",
                  color: "white",
                  marginRight: "7px",
                }}
              />
              <Text color="rgb(149,137,155)">Billable</Text>
            </Flex>
            <Spacer />
          </Flex>
          <TableContainer bg="white">
            <Table size="sm">
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
                {data.map((el) => (
                  <Tr key={el.userID + Math.random()}>
                    <Td>{el.name}</Td>
                    {/* fix this bug */}
                    {/* <Td>{el.clientID.name}</Td> */}
                    <Td>{el.timeEstimate} days</Td>
                    <Td>{`$${el.fixedRate}`}</Td>
                    <Td>{el.team_memberID.groups}</Td>
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
