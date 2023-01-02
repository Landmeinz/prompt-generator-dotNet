import React, { useState, useEffect } from "react";
import { ENDPOINTS, createApiEndpoint } from "../_Services/apiServices";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

// --- COMPONENTS --- //
import GenerateButton from "../GenerateButton/GenerateButton";
import CategoryList from "../CategoryList/CategoryList";
import HelmetWrap from "../_HelmetWrap/HelmetWrap";
import PromptOutput from "../PromptOutput/PromptOutput";
import UserInputs from "../UserInputs/UserInputs";

// --- MUI --- //
import { Typography, Box, Chip, Button } from "@mui/material";

// --- SX STYLES --- //
import {
  trans,
  sxHomeSectionOne,
  sxHomeTextContent,
  sxHeroText,
  sxHomeChipContent,
  sxHomeContainer,
  sxButtonContainer,
  
} from "../sxStyles";

function Home() {
  // this will need to be updated to an array to handle items from multiple categories //
  const [prompt, setPrompt] = useState("");
  const [disableSelect, setDisableSelect] = useState({});

  const dispatch = useDispatch();

  return (
    <Box sx={sxHomeContainer}>
      <motion.div
        initial={trans.initial}
        animate={trans.animate}
        exit={trans.exit}
        style={trans.style}
        transition={trans.time}
      >
        <Box>
          <HelmetWrap />
          <Box id="sxHomeSectionOne" sx={sxHomeSectionOne}>
            <Box sx={sxButtonContainer}>
              <GenerateButton />
              <UserInputs />
            </Box>
            <CategoryList />
          </Box>
          <PromptOutput />
        </Box>
      </motion.div>
    </Box>
  );
}

export default Home;
