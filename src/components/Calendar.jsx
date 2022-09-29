

import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { Box } from "@chakra-ui/react";

export const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(Date.now());
  return (
    <Box border="1px" paddingLeft="10px">
    <DatePicker  selected={selectedDate} onChange={(date) => setSelectedDate(date)} dateFormat='dd/MM/yyyy'
    minDate={new Date()}
    showYearDropdown
    scrollableYearDropdown
    />
    </Box>
  );
};











