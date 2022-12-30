import React, { useState, useEffect } from "react";
import { ENDPOINTS, createApiEndpoint } from "../_Services/apiServices";
import { motion, AnimatePresence } from "framer-motion";

// --- COMPONENTS --- //
// import GenerateButton from "../GenerateButton/GenerateButton";

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

  const [pinChipStatus, setPinChipStatus] = useState(false);

  function handleClick(category) {
    console.log("this should pin the chip");
    console.log(category);
    setPinChipStatus(true);
  }

  function handleDelete() {
    console.log("this should unPin the chip");
    setPinChipStatus(false);
  }

  return (
    <Box id="sxHomeTextContent" sx={sxHomeTextContent}>
      <Box sx={sxHomeChipContent}>
        <Chip
          label="All"
          color={"primary"}
          variant="filled"
          onClick={() => handleClick()}
          onDelete={() => handleDelete()}
        />
        <Chip
          label="None"
          color={"primary"}
          variant="filled"
          onClick={() => handleClick()}
          onDelete={() => handleDelete()}
        />
        {categories?.sort().map((category) => (
          <Chip
            sx={sxChip}
            key={category.id}
            label={category}
            value={category}
            color={"primary"}
            variant="filled"
            onClick={() => handleClick(category)}
            onDelete={() => handleDelete()}
            deleteIcon={pinChipStatus ? <DeleteIcon /> : <PushPinIcon />}
          />
        ))}
      </Box>
    </Box>
  );
}

export default CategoryList;
