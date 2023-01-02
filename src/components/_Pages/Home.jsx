import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  sxButtonContainer,
  
} from "../sxStyles";

function Home() {

  return (
    <Box id="homeContainer">
      <motion.div
        initial={trans.initial}
        animate={trans.animate}
        exit={trans.exit}
        style={trans.style}
        transition={trans.time}
      >
        <Box>
          <HelmetWrap />
          <Box id="homeSectionOne" sx={sxHomeSectionOne}>
            <Box id="buttonContainer" sx={sxButtonContainer}>
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
