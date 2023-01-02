import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// --- COMPONENTS --- //

// --- MUI --- //
import { Typography, Box, Chip, Button } from "@mui/material";

// --- SX STYLES --- //
import {
  sxPromptContainer,
  sxPromptCopy,
  sxPromptOutput,
  sxCopyButton,
} from "../sxStyles";

function PromptOutput() {
  const randomKeywords = useSelector((store) => store.randomKeywords);
  const userInputs = useSelector((store) => store.userInputs);

  function handleCopy() {
    console.log("handleCopy");
    let text = randomKeywords + userInputs;
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
    <Box id="promptContainer" sx={sxPromptContainer}>
      <Box id="promptCopy" sx={sxPromptCopy}>
        <Typography variant="h5">Prompt:</Typography>
        <Button
          id="copyButton"
          sx={sxCopyButton}
          onClick={() => handleCopy()}
          variant="contained"
        >
          Copy
        </Button>
      </Box>

      <Box id="promptOutput" sx={sxPromptOutput}>
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
