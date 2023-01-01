import React, { useState, useEffect } from "react";
import { ENDPOINTS, createApiEndpoint } from "../_Services/apiServices";
import { motion, AnimatePresence } from "framer-motion";
import { put, takeLatest } from "redux-saga/effects";
import { useDispatch, useSelector } from "react-redux";

// --- COMPONENTS --- //

// --- MUI --- //
import { Typography, Box, Chip, Button } from "@mui/material";

// --- SX STYLES --- //
import { trans, sxCategoryPillContainer } from "../sxStyles";

function CategoryPill({ categories, category }) {
  const dispatch = useDispatch();
  // const [currentSelection, setCurrentSelection] = useState([]);
  const selectedCategories = useSelector((store) => store.selectedCategories);

  function handleClick(category) {
    console.log("--- clicked on", category, "---");

    selectedCategories.includes(category)
      ? dispatch({ type: "REMOVE_SELECTED_CATEGORY", payload: category })
      : dispatch({ type: "SET_SELECTED_CATEGORIES", payload: category });
  }

  return (
    <Box sx={sxCategoryPillContainer} onClick={() => handleClick(category)}>
      <Typography variant="body">{category}</Typography>

      {selectedCategories?.includes(category) ? <p>yes!</p> : <p>no!</p>}
    </Box>
  );
}
export default CategoryPill;
