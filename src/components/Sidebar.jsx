import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { AiOutlineTeam, AiFillProject } from "react-icons/ai";
import {
  BsFillClockFill,
  BsFillFilePersonFill,
  BsPersonCircle,
} from "react-icons/bs";
import { TbReport } from "react-icons/tb";
import { MdOutlineInsights } from "react-icons/md";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiTag } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { logout } from "../store/auth/auth.actions";
import axios from "axios";

export const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [email, setemail] = useState("")

  const getName = () => {
    let token = localStorage.getItem("token");
    axios.get(`https://web-production-fc34.up.railway.app/users/${token}`).then((res) => {
      // console.log(res.data);
      setemail(res.data.email)
      setname(res.data.name)
    })
  }

  useEffect(() => {
    getName();
  }, [])
  

  return (
    <>
      <Box
        position="fixed"
        bg="rgb(44,19,56)"
        h="calc(100vh)"
        w="15%"
        paddingLeft="20px"
        paddingRight="20px"
      >
        <Image
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
          src="https://freight.cargo.site/t/original/i/b3ce721155f60e21682970f5e714309bac4224c4b3891f0d387519c0181ca9e6/Frame-14x-100.jpg"
          alt="logo"
        />
        <Text marginBottom="10px" textAlign="left" color="rgb(130, 113, 136)">
          TRACK
        </Text>
        <Flex
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/timer")}
          marginBottom="20px"
          alignItems="center"
        >
          <BsFillClockFill color="white" />
          <Text paddingLeft="7px" color="white">
            Timer
          </Text>
        </Flex>
        <Text marginBottom="10px" textAlign="left" color="rgb(130, 113, 136)">
          ANALYZE
        </Text>
        <Flex
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/reports")}
          alignItems="center"
        >
          <TbReport color="white" />
          <Text paddingLeft="7px" color="white">
            Reports
          </Text>
        </Flex>
        <Flex marginBottom="20px" alignItems="center">
          <MdOutlineInsights color="white" />
          <Text paddingLeft="7px" color="white">
            Insights
          </Text>
        </Flex>
        <Text marginBottom="10px" textAlign="left" color="rgb(130, 113, 136)">
          MANAGE
        </Text>
        <Flex alignItems="center">
          <AiFillProject style={{ color: "white", marginRight: "7px" }} />
          <Link to={"/project"}>
          <Text color="white">Projects</Text>
          </Link>
        </Flex>
        <Flex alignItems="center">
          <BsFillFilePersonFill
            style={{ color: "white", marginRight: "7px" }}
          />
          <Link to="/client">
            {" "}
            <Text color="white">Clients</Text>
          </Link>
        </Flex>
        <Flex alignItems="center">
          <AiOutlineTeam style={{ color: "white", marginRight: "7px" }} />
          <Text color="white">Team</Text>
        </Flex>
        <Flex alignItems="center" marginBottom="20px">
          <HiTag style={{ color: "white", marginRight: "7px" }} />
          <Link to="/tags">
            {" "}
            <Text cursor={"pointer"} color="white">
              Tags
            </Text>
          </Link>
        </Flex>
        <Text marginBottom="10px" textAlign="left" color="rgb(130, 113, 136)">
          WORKSPACE
        </Text>
        <Flex
          paddingLeft="5px"
          border="1px solid white"
          borderRadius="5px"
          alignItems="center"
        >
          <BsPersonCircle color="white" />
          <Box paddingLeft="10px">
            <Text textAlign="left" color="white">
              {name}
            </Text>
            <Text textAlign="left" color="white">
              {email}
            </Text>
          </Box>
        </Flex>
        <Link to="/">
        <Button w="100%" marginTop="20px" onClick={() => dispatch(logout())}>
          Logout
        </Button>
        </Link>
      </Box>
    </>
  );
};
