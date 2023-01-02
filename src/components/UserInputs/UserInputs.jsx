import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// --- COMPONENTS --- //

// --- MUI --- //
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Typography, Box, Chip, Button, TextField } from "@mui/material";

// --- SX STYLES --- //
import {
  sxUserInputContainer,
  sxButtonTextContent,
  sxTextInput,
  sxAddTextButton,

} from "../sxStyles";

function UserInputs() {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState("");

  function handleClick() {
    dispatch({ type: "SET_USER_INPUTS", payload: inputs.trim() });
    setInputs("");
  }

  return (
    <Box id="userInputContainer" sx={sxUserInputContainer}>
      <Box id="buttonTextContaner" sx={sxButtonTextContent} component="form" noValidate>
        <Typography color="info.light" variant="h6">
          Add Your Own Text
        </Typography>
        <TextField
          sx={sxTextInput}
          id="inputs"
          variant="outlined"
          value={inputs}
          autoComplete="off"
          onChange={(event) => setInputs(event.target.value)}
        />
      </Box>

      <Button od="addTextButton" sx={sxAddTextButton} onClick={() => handleClick()}>
        <AddCircleIcon color="secondary" fontSize="large" />
      </Button>
    </Box>
  );
}

export default UserInputs;
