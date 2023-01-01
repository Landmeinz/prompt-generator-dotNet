import React, { useState, useEffect } from "react";
import { ENDPOINTS, createApiEndpoint } from "../_Services/apiServices";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

// --- COMPONENTS --- //
// import GenerateButton from "../GenerateButton/GenerateButton";

// --- MUI --- //
import { Typography, Box, Chip } from "@mui/material";

// --- SX STYLES --- //
import { trans, sxPromptContainer } from "../sxStyles";

function PromptOutput() {
  const randomKeywords = useSelector((store) => store.randomKeywords);

  // function handleClick() {
  //     console.log('clicked');
  // }; // handleClick

  return (
    <Box id="PromptContainer" sx={sxPromptContainer}>
      <Typography variant="h5">Prompt:</Typography>

      {randomKeywords?.sort().map((kw, i) => (
        <Typography key={i} variant="h4">
          {kw.keyword}
        </Typography>
      ))}
    </Box>
  );
}
export default PromptOutput;
