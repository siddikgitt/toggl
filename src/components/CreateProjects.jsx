import {
  Button,
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const getData = async (token) => {
  let abc = localStorage.getItem("token");
  let data = await axios
    .get("https://web-production-fc34.up.railway.app/clients", { headers: { token: abc } })
    .then((res) => {
      // console.log(res.data);
      return res.data;
    });
  return data;
};

const getTeamData = async () => {
  let abc = localStorage.getItem("token");
  let data = await axios
    .get("https://web-production-fc34.up.railway.app/team_members", { headers: { token: abc } })
    .then((res) => {
      // console.log(res.data);
      return res.data;
    });
  return data;
};

export const CreateProjects = ({ open, setopen, postData }) => {
  const [project, setProject] = useState("");
  const [client, setClient] = useState("");
  const [rate, setRate] = useState(0);
  const [team, setTeam] = useState("");
  const [day, setDays] = useState("");
  const { token } = useSelector((store) => store.auth);
  const [data, setData] = useState([]);
  const [teamdata, setteamData] = useState([]);

  //   console.log(data);
  const onClose = () => {
    setopen(false);
    postData(project, rate, day, client, team)
    // projectName, rate, days, clientID, teamID
  };

  const handleClient = () => {
    getData().then((res) => {
      // console.log(res);
      setData(res);
    });
    getTeamData().then((res) => {
      // console.log(res);
      setteamData(res);
    });
  };

  useEffect(() => {
    handleClient();
  }, []);

  const initialRef = React.useRef(null);

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        isOpen={open}
        onClose={onClose}
        size="sm"
        placeItem="center"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new Project</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mb="20px">
              <Input
              autocomplete="off"
                onChange={(e) => setProject(e.target.value)}
                ref={initialRef}
                placeholder="Project Name"
              />
              <Input
              marginTop="15px"
                type="Number"
                onChange={(e) => setRate(e.target.value)}
                placeholder="Fixed Rate in USD"
              />
              <Input
              marginTop="15px"
                type="Number"
                onChange={(e) => setDays(e.target.value)}
                placeholder="Time Estimate in Days"
              />
              {/* <Input onChange={(e)=>setClient(e.target.value)} marginTop="15px" ref={initialRef} placeholder="Client Name"/> */}
              <Select
                placeholder="Select Client"
                marginTop="15px"
                onChange={(e) => setClient(e.target.value)}
              >
                {/* <option value='option1'>Option 1</option> */}
                {data.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                ))}
              </Select>
              <Select
                placeholder="Select Team"
                marginTop="15px"
                onChange={(e) => setTeam(e.target.value)}
              >
                {teamdata.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.groups}
                  </option>
                ))}
              </Select>
            </FormControl>

            <Button
              backgroundColor="#E57CD8"
              color="white"
              w="100%"

              onClick={onClose}
            >
              Create Project{" "}
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
