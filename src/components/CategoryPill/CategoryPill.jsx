import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// --- COMPONENTS --- //

// --- MUI --- //
import { Typography, Box, Chip, Button } from "@mui/material";

// --- SX STYLES --- //
import {
  sxCategoryPillContainer,
  sxCategoryPillContainerSelected,
} from "../sxStyles";

function CategoryPill({ category }) {
  const dispatch = useDispatch();
  const categories = useSelector((store) => store.categories);
  const selectedCategories = useSelector((store) => store.selectedCategories);

  function handleClick(category) {
    console.log("--- clicked on", category, "---");

    if (category == "All") {
      return dispatch({
        type: "SET_SELECTED_CATEGORIES_ALL",
        payload: categories,
      });
    }
    if (category == "None") {
      return dispatch({ type: "SET_SELECTED_CATEGORIES_NONE" });
    }

    selectedCategories.includes(category)
      ? dispatch({ type: "REMOVE_SELECTED_CATEGORY", payload: category })
      : dispatch({ type: "SET_SELECTED_CATEGORIES", payload: category });
  }

  return (
    <Box id="categoryPillComponent">
      {selectedCategories.includes(category) ? (
        <Box
          id="categoryPillContainerSelected"
          sx={sxCategoryPillContainerSelected}
          onClick={() => handleClick(category)}
        >
          <Typography variant="body">{category}</Typography>
        </Box>
      ) : (
        <Box
          id="categoryPillContainer"
          sx={sxCategoryPillContainer}
          onClick={() => handleClick(category)}
        >
          <Typography variant="body">{category}</Typography>
        </Box>
      )}
    </Box>
  );
}
export default CategoryPill;
