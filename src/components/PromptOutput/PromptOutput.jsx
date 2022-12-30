import React, { useState, useEffect } from "react";
import { ENDPOINTS, createApiEndpoint } from "../_Services/apiServices";
import { motion, AnimatePresence } from "framer-motion";

// --- COMPONENTS --- //
// import GenerateButton from "../GenerateButton/GenerateButton";

// --- MUI --- //
import { Typography, Box, Chip } from "@mui/material";

// --- SX STYLES --- //
import {
  trans,
  sxPromptContainer,

} from "../sxStyles";

function PromptOutput() {
  // function handleClick() {
  //     console.log('clicked');
  // }; // handleClick

  return (
    <Box id="PromptContainer" sx={sxPromptContainer}>
      <Typography variant="h5">
        Prompt: 
      </Typography>
      <Typography variant="h4">
        This is a random string to show output
      </Typography>
    </Box>
  );
}
export default PromptOutput;
