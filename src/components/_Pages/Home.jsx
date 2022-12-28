import React, { useState, useEffect } from "react";
import { ENDPOINTS, createApiEndpoint } from "../_Services/apiServices";
import { motion, AnimatePresence } from "framer-motion";

// --- COMPONENTS --- //
import GenerateButton from "../GenerateButton/GenerateButton";
import CategoryList from "../CategoryList/CategoryList";
import HelmetWrap from "../_HelmetWrap/HelmetWrap";

// --- MUI --- //
import { Typography, Box, Chip, Button } from "@mui/material";

// --- SX STYLES --- //
import {
  trans,
  sxHomeSectionOne,
  sxHomeTextContent,
  sxHeroText,
  sxHomeChipContent,
} from "../sxStyles";

function Home() {
  // this will need to be updated to an array to handle items from multiple categories //
  const [prompt, setPrompt] = useState("");
  const [disableSelect, setDisableSelect] = useState({});

  const [categories, setCategories] = useState([]);
  const [keywords, setKeywords] = useState([]);

  // start by getting our keywords and categories //
  useEffect(() => {
    // fetchData();
    fetchKeywords();
    fetchCategories();
    setPrompt("start");
  }, []);

  function fetchKeywords() {
    console.log("--- fetchKeywords ---");
    try {
      const response = createApiEndpoint(ENDPOINTS.keyword)
        .fetch()
        .then((response) => setKeywords(response.data));
      return response;
    } catch (err) {
      console.log(err);
    }
  }

  function fetchCategories() {
    console.log("--- fetchCategories ---");
    try {
      const response = createApiEndpoint(ENDPOINTS.category)
        .fetch()
        .then((response) => {
          setCategories(response.data);
        });

      console.log("should have new categories loaded");
      return response;
    } catch (err) {
      console.log(err);
    }
  }

  // async function postKeyword() {
  //   try {
  //     const response = createApiEndpoint(ENDPOINTS.keyword)
  //       // .post(keyword)
  //       .then((response) => setKeywords(response.data));
  //     return response;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  function getRandomKeyword() {
    let count = keywords.length;
    let randomCount = Math.floor(Math.random() * count);
    console.log("number", randomCount);
    return keywords[randomCount];
  }

  function handleClick() {
    console.log("clicked on randomTheme");
    setPrompt("yeas");
    // let currentKeywords = fetchKeywords();
    let currentKeywords = keywords;
    console.log("--- currentKeywords", currentKeywords);
    // setPrompt(currentKeywords[Math.floor(Math.random() * currentKeywords.length)]);
    let promptSet = getRandomKeyword().keyword;
    console.log("promptSet", promptSet);
    setPrompt("hello love");
  }

  // function handleDisableSelect() {
  //   setDisableSelect(!disableSelect);
  // }

  function handlePost() {
    console.log("--- handlePost ---");
    let newKeyword = {
      category: "test category",
      subCategory: "test subCategory",
      subCategoryType: "test subCategoryType",
      keyword: "test keyword",
    };

    try {
      const response = createApiEndpoint(ENDPOINTS.keyword, newKeyword)
        .post()
        .then((response) => {
          fetchCategories();
        });
      return response;
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Box>
      <motion.div
        initial={trans.initial}
        animate={trans.animate}
        exit={trans.exit}
        style={trans.style}
        transition={trans.time}
      >
        <Box>
          <HelmetWrap />

          <Button onClick={() => handlePost()}>POST</Button>

          <Box id="sxHomeSectionOne" sx={sxHomeSectionOne}>
            <GenerateButton />
            <CategoryList categories={categories} />
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
}

export default Home;

// <div>
// <h1>Generate Your Prompts</h1>
// <button onClick={() => handleClick()}>Generate</button>

// <br />
// <label htmlFor="prompt">Prompt: </label>
// <h3 id="prompt">{prompt}</h3>
// <br />

// <label htmlFor="theme" onClick={() => handleDisableSelect()}>
//   Theme:{" "}
// </label>

// {keywords?.map((thing) => (
//   <div key={thing.id}>
//     <h2>{thing.keyword}</h2>
//     <p>{thing.category}</p>
//     <p>{thing.subCategory}</p>
//     <p>{thing.subCategoryType ? thing.subCategoryType : "n/a" }</p>
//     <p>{thing.lastPing}</p>
//   </div>
// ))}
// </div>
