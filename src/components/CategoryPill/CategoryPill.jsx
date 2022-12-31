import React, { useState, useEffect } from "react";
import { ENDPOINTS, createApiEndpoint } from "../_Services/apiServices";
import { motion, AnimatePresence } from "framer-motion";
import { AllKeywords } from "../_Data/AllKeywords";

// --- COMPONENTS --- //

// --- MUI --- //
import { Typography, Box, Chip, Button } from "@mui/material";

// --- SX STYLES --- //
import { trans, sxCategoryPillContainer } from "../sxStyles";

function CategoryPill({ categories, category, callback }) {
  const [selectStatus, setSelectStatus] = useState(false);
  // const [selectList, setSelectList] = useState(["yes"]);

  const state = {
    example: '👋'
}
const handleCallback = () => callback(state)

  function handleClick(category) {
    // setSelectList([...selectList, category]);

    !selectStatus
      ? console.log(`this should pin the ${category} pill`)
      : console.log(`this should UnPin the ${category} pill`);

    // setSelectStatus(!selectStatus);

    statusCheck();
  }

  function statusCheck() {
    // console.log(`--- selectStatus: ${selectStatus}`);
    // console.log(`--- selectList: ${selectList}`);
  }

  return (
    <Box sx={sxCategoryPillContainer} onClick={() => handleCallback()}>
      <Typography variant="body">{category}</Typography>
    </Box>
  );
}
export default CategoryPill;
