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
  sxHomeSectionOne,
  sxHomeTextContent,
  sxHeroText,
  sxHomeChipContent,
} from "../sxStyles";

function CategoryList({ categories }) {
  let categoryList = ["fake", "much mock", "not real", "more fake"];
  function handleClick() {}
  function handleDelete() {}

  return (
    <Box id="sxHomeTextContent" sx={sxHomeTextContent}>
      <Box sx={sxHomeChipContent}>
        {categoryList?.map((kw, k) => (
          <Chip
            key={k}
            label={kw}
            color={"primary"}
            variant="filled"
            onClick={handleClick}
            onDelete={handleDelete}
          />
        ))}
      </Box>
      <br />
      <Box sx={sxHomeChipContent}>
        {categories?.map((category, i) => (
          <Chip
            key={i}
            label={category}
            color={"primary"}
            variant="filled"
            onClick={handleClick}
            onDelete={handleDelete}
          />
        ))}
      </Box>
    </Box>
  );
}

export default CategoryList;
