import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// --- COMPONENTS --- //
import CategoryPill from "../CategoryPill/CategoryPill";

// --- MUI --- //
import { Typography, Box, Chip } from "@mui/material";

// --- SX STYLES --- //
import {
  sxCategoryChipContent,
  sxCategoryList,

} from "../sxStyles";

function CategoryList() {
  const dispatch = useDispatch();
  const categories = useSelector((store) => store.categories);

  return (
    <Box id="categoryList" sx={sxCategoryList}>
      <Typography color="primary" variant="h4">
        Select Some Categories
      </Typography>

      <Box id="categoryChipContent" sx={sxCategoryChipContent}>
        <CategoryPill category="All" value="All" />
        <CategoryPill category="None" value="None" />
        {categories?.sort().map((category, i) => (
          <CategoryPill
            key={i}
            categories={categories}
            category={category}
            value={category}
          />
        ))}
      </Box>
    </Box>
  );
}

export default CategoryList;
