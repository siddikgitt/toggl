// import { useState } from "react"
// import { useStopwatch } from "../hooks/useStopwatch"
import { AiFillPlayCircle } from "react-icons/ai";

import { useEffect, useState } from "react";

import { FaRegStopCircle } from "react-icons/fa";
import { Box, Flex } from "@chakra-ui/react";
import axios from "axios";

export const Stopwatch = ({ updateDataCount, taskID }) => {
  const updateData = async (time, seconds) => {
    let a = await axios.patch(
      `http://localhost:8080/tasks/${taskID}`,
      {
        counterTime: time,
        seconds: seconds
      },
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
  };

  const [time, setTime] = useState(0);
  const [timerOn, setTimeOn] = useState(false);
  const [sec, setSec] = useState(0);

  const Stop = async () => {
    let seconds = await axios
      .get(`http://localhost:8080/tasks/${taskID}`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        // console.log(res.data.seconds);
        // setSec(res.data.seconds)
        // setTime(time => time + sec);
        return res.data.seconds;
      });
      seconds += time;
      console.log(seconds);
    let updateTime =
      Math.floor(seconds / 3600) +
      "hr:" +
      Math.floor((seconds % 3600) / 60) +
      "min:" +
      Math.floor((seconds % 3600) % 60) +
      "sec";
    console.log(updateTime);
    updateData(updateTime, seconds);
    updateDataCount();
    setTime(0);
    setTimeOn(false);
  };

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <Flex alignItems="center">
      <Box paddingRight="30px" alignItems="center">
        <span style={{ fontSize: "25px", color: "rgb(149,137,155)" }}>
          {Math.floor(time / 3600)}:
        </span>
        <span style={{ fontSize: "25px", color: "rgb(149,137,155)" }}>
          {Math.floor((time % 3600) / 60)}:
        </span>
        <span style={{ fontSize: "25px", color: "rgb(149,137,155)" }}>
          {Math.floor((time % 3600) % 60)}
        </span>
        {/* <span>{("0"+((time/10)%100)).slice(-2)}</span> */}
      </Box>
      <Box alignItems="center">
        {!timerOn && time === 0 && (
          <button onClick={() => setTimeOn(true)}>
            {" "}
            <AiFillPlayCircle size="40" color="rgb(209,100,197)" />
          </button>
        )}
        {/* {timerOn && (
                     <button onClick={()=>setTimeOn(false)}>Stop </button>
                )}
                {!timerOn && time !==0 && (
                       <button onClick={()=>setTimeOn(true)}>Resume</button>
                )} */}
        {timerOn && time > 0 && (
          // <button  onClick={()=>setTime(0)}> <FaRegStopCircle/></button>
          <button onClick={Stop}>
            <FaRegStopCircle size="40" color="rgb(232,113,97)" />
          </button>
        )}
      </Box>
    </Flex>
  );

  // const {time,start,pause,reset}=useStopwatch(0)
  // const [on,setOn]=useState(false)
  // return (
  //     <div style={{display:'flex', alignItems:'center'}}>
  //     <h1 style={{paddingRight:"5px"}}>{time}</h1>
  //     <div>
  //         <button style={{paddingRight:"5px"}} onClick={start}>
  //             <AiFillPlayCircle/>
  //         </button>
  //         {/* <button onClick={pause}>pause</button> */}
  //         <button style={{paddingRight:"5px"}} onClick={reset}>
  //             <FaRegStopCircle/>
  //         </button>
  //     </div>
  //     </div>
  // )
};
