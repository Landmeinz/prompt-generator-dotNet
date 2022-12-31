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
import { Remove } from "@mui/icons-material";
import { click } from "@testing-library/user-event/dist/click";

function CategoryList({ categories }) {
  const [selectList, setSelectList] = useState([]);

  const callback = (payload) => {
    if (payload == "All") {
      setSelectList([...categories]);
    } else if (payload == "None") {
      setSelectList([]);
    } else {
      setSelectList([...selectList, payload]);
    }
    logStatus();
  };

  const callBackRemove = (payload) => {
    // selectList.filter()
    // console.log(selectList.indexOf(payload));
    console.log("remove:", payload);
    const index = selectList.indexOf(payload);
    if (index > -1) {
      // only splice array when item is found
      selectList.splice(index, 1); // 2nd parameter means remove one item only
    }
    console.log(selectList);
    logStatus();

    const kindex = categories.indexOf(payload);
    if (kindex > -1) {
      // only splice array when item is found
      selectList.splice(kindex, 1); // 2nd parameter means remove one item only
    }
    logStatus();
  };

  const logStatus = () => {
    console.log("selectList:", selectList);
  };

  function click(){
    console.log('hello click');
  }

  return (
    <Box id="sxHomeTextContent" sx={sxHomeTextContent}>
      <Typography color="primary" variant="h4">
        Select Some Categories
      </Typography>

      <Box sx={sxHomeChipContent}>
        <CategoryPill
          // category="All"
          // callback={callback}
          // callBackRemove={callBackRemove}
          // selectList={selectList}
          // value="All"
          // onClick={() => click()}
        />
        <CategoryPill
          category="None"
          callback={callback}
          callBackRemove={callBackRemove}
          selectList={selectList}
          value="None"
        />
        {categories?.sort().map((category, i) => (
          <CategoryPill
            categories={categories}
            category={category}
            callback={callback}
            callBackRemove={callBackRemove}
            selectList={selectList}
            key={i}
            value={category}
          />
        ))}
      </Box>
    </Box>
  );
}

export default CategoryList;