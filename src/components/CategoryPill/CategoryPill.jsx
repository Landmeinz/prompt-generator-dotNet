import React, { useState, useEffect } from "react";
import { ENDPOINTS, createApiEndpoint } from "../_Services/apiServices";
import { motion, AnimatePresence } from "framer-motion";
import { AllKeywords } from "../_Data/AllKeywords";

// --- COMPONENTS --- //

// --- MUI --- //
import { Typography, Box, Chip, Button } from "@mui/material";

// --- SX STYLES --- //
import { trans, sxCategoryPillContainer } from "../sxStyles";

function CategoryPill({ selectList, category, callback, callBackRemove }) {
  const [selectStatus, setSelectStatus] = useState(false);

  function handleClick(category) {
    // setSelectList([...selectList, category]);

    !selectStatus
      ? console.log(`this should pin the ${category} pill`)
      : console.log(`this should UnPin the ${category} pill`);

    // setSelectStatus(!selectStatus);

    if (selectList.includes(category)) {
      return callBackRemove(category);
    }
    callback(category);
  }

  return (
    <Box sx={sxCategoryPillContainer} onClick={() => handleClick(category)}>
      <Typography variant="body">{category}</Typography>
    </Box>
  );
}
export default CategoryPill;
