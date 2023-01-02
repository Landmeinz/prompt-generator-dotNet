import React, { useState, useEffect } from "react";
import { ENDPOINTS, createApiEndpoint } from "../_Services/apiServices";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

// --- COMPONENTS --- //
// import GenerateButton from "../GenerateButton/GenerateButton";

// --- MUI --- //
import { Typography, Box, Chip, Button } from "@mui/material";

// --- SX STYLES --- //
import {
  trans,
  sxPromptContainer,
  sxPromptCopy,
  sxPromptOutput,
} from "../sxStyles";
import { SignalCellularNoSimTwoTone, StoreTwoTone } from "@mui/icons-material";

function PromptOutput() {
  const randomKeywords = useSelector((store) => store.randomKeywords);
  const userInputs = useSelector((store) => store.userInputs);

  function handleCopy() {
    console.log("handleCopy");
    let text = randomKeywords + userInputs;
    // let textToCopy = `${randomKeywords}${userInputs}`;
    // navigator.clipboard.writeText(JSON.stringify(textToCopy));
    try {
      navigator.clipboard.writeText(text);
      console.log("Content copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  } // handleCopy

  console.log("userInputs", userInputs);
  console.log("randomKeywords", randomKeywords);

  return (
    <Box id="PromptContainer" sx={sxPromptContainer}>
      <Box sx={sxPromptCopy}>
        <Typography variant="h5">Prompt:</Typography>
        <Button onClick={() => handleCopy()} variant="outlined">
          Copy
        </Button>
      </Box>

      <Box sx={sxPromptOutput}>
        {userInputs.map((input, i) => (
          <Typography id="promptText" key={i} variant="body1" value={input}>
            {input ? `${input}, ` : ""}
          </Typography>
        ))}

        {randomKeywords?.map((kw, k) => (
          <Typography id="promptText" key={k} variant="body1" value={kw}>
            {kw.keyword ? `${kw.keyword}, ` : ""}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}
export default PromptOutput;
