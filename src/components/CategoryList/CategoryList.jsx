import React, { useState, useEffect } from "react";
import { ENDPOINTS, createApiEndpoint } from "../_Services/apiServices";
import { motion, AnimatePresence } from "framer-motion";

// --- COMPONENTS --- //
// import GenerateButton from "../GenerateButton/GenerateButton";
import CategoryPill from "../CategoryPill/CategoryPill";

// --- MUI --- //
import { Typography, Box, Chip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import PushPinIcon from "@mui/icons-material/PushPin";

// --- SX STYLES --- //
import {
  trans,
  sxHomeSectionOne,
  sxHomeTextContent,
  sxHeroText,
  sxHomeChipContent,
  sxChip,
} from "../sxStyles";

function CategoryList({ categories }) {
  // const [selectList, setSelectList] = useState([]);
  // const callback = (payload) => {
  //   setSelectList(payload);
  //   console.log(selectList);
  // };
  const [state, setState] = useState({});
  const callback = (payload) => {
    setState(payload);
    console.log(state);
  };

  return (
    <Box id="sxHomeTextContent" sx={sxHomeTextContent}>
      <Typography color="primary" variant="h4">
        Select Some Categories
      </Typography>
      <Box sx={sxHomeChipContent}>
        {categories?.sort().map((category, i) => (
          <CategoryPill
            categories={categories}
            category={category}
            callback={callback}
            key={i}
            value={category}
          />
        ))}
      </Box>
    </Box>
  );
}

export default CategoryList;
