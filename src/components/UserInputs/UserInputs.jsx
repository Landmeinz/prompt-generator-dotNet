import React, { useState, useEffect } from "react";
import { ENDPOINTS, createApiEndpoint } from "../_Services/apiServices";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

// --- COMPONENTS --- //

// --- MUI --- //
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Typography, Box, Chip, Button, TextField } from "@mui/material";

// --- SX STYLES --- //
import {
  trans,
  sxHomeSectionOne,
  sxHomeTextContent,
  sxHeroText,
  sxHomeChipContent,
  sxHomeContainer,
  sxUserInputContainer,
  sxButtonTextContent,
  sxTextInput,

} from "../sxStyles";
import { Info } from "@mui/icons-material";

function UserInputs() {
  const dispatch = useDispatch();
  const userInputs = useSelector((store) => store.userInputs);
  const [inputs, setInputs] = useState("");
  const [inputList, setInputList] = useState([]);
  //   useEffect(() => {

  //   }, []);

  //   function handleClick() {
  //     console.log("--- clicked on handleClick ---");
  //     setInputList([...inputList, inputList]);
  //     dispatch({ type: "SET_USER_INPUTS", payload: inputs });
  //   }

  function handleClick() {
    console.log("--- clicked on handleClick ---");
    console.log("--- inputs:", inputs);
    dispatch({ type: "SET_USER_INPUTS", payload: inputs.trim() });
    setInputList("");
  }

  return (
    <Box sx={sxUserInputContainer}>
      <Typography color="info.light" variant="h6">Add Your Own Text</Typography>
      <Box sx={sxButtonTextContent}>
        <Button onClick={() => handleClick()}><AddCircleIcon fontSize="large"/></Button>
        <TextField
          sx={sxTextInput}
          id="inputs"
          variant="outlined"
          value={inputs}
          onChange={(event) => setInputs(event.target.value)}
        />
      </Box>
    </Box>
  );
}

export default UserInputs;
