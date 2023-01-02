import React, { useState, useEffect } from "react";
import { ENDPOINTS, createApiEndpoint } from "../_Services/apiServices";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

// --- COMPONENTS --- //
// import GenerateButton from "../GenerateButton/GenerateButton";

// --- MUI --- //
import { Typography, Box, Chip, Button } from "@mui/material";

// --- SX STYLES --- //
import { trans, sxPromptContainer, sxPromptCopy, sxPromptOutput } from "../sxStyles";
import { SignalCellularNoSimTwoTone, StoreTwoTone } from "@mui/icons-material";

function PromptOutput() {
  const randomKeywords = useSelector((store) => store.randomKeywords);
  const userInputs = useSelector((store) => store.userInputs);

  // function handleClick() {
  //     console.log('clicked');
  // }; // handleClick

  console.log("userInputs", userInputs);
console.log("randomKeywords", randomKeywords);

  return (
    <Box id="PromptContainer" sx={sxPromptContainer}>
      <Box sx={sxPromptCopy}>
        <Typography variant="h5">Prompt:</Typography>
        <Button variant="outlined">Copy</Button>
      </Box>

      <Box sx={sxPromptOutput}>
        {userInputs.map((input, k) => (
          <Typography key={k} variant="body1">
            {input ? `${input}, ` : ''}
          </Typography>
        ))}

        {randomKeywords?.map((kw, i) => (
          <Typography key={i} variant="body1">
            {kw.keyword ? `${kw.keyword}, ` : ''}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}
export default PromptOutput;
