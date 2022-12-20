import React, { useState, useEffect } from "react";
import { ENDPOINTS, createApiEndpoint } from "../_Services/apiServices";

function Home() {
  // this will need to be updated to an array to handle items from multiple categories //
  const [prompt, setPrompt] = useState("");
  const [disableSelect, setDisableSelect] = useState({});
  const [keywords, setKeywords] = useState([]);

  // let's sort our categories first //
  useEffect(() => {
    // fetchData();
    fetchKeywords();
    setPrompt("hello");
  }, []);

  async function fetchKeywords() {
    try {
      const response = createApiEndpoint(ENDPOINTS.keyword)
        .fetch()
        .then((response) => setKeywords(response.data));
      return response;
    } catch (err) {
      console.log(err);
    }
  }

  async function getRandomKeyword(){
    let count = keywords.length;
    let randomCount = Math.floor(Math.random() * count);
    console.log("number", randomCount);
    return keywords[randomCount];
  }

  async function handleClick() {
    console.log("clicked on randomTheme");
    setPrompt("yeas");
    // let currentKeywords = fetchKeywords();
    let currentKeywords = keywords;
    console.log("--- currentKeywords", currentKeywords);
    // setPrompt(currentKeywords[Math.floor(Math.random() * currentKeywords.length)]);
    let promptSet = await getRandomKeyword().keyword;
    console.log('promptSet', promptSet);
    setPrompt(promptSet);
  }

  function handleDisableSelect() {
    setDisableSelect(!disableSelect);
  }

  return (
    <div>
      <h1>Generate Your Prompts</h1>
      <button onClick={() => handleClick()}>Generate</button>

      <br />
      <label htmlFor="prompt">Prompt: </label>
      <h3 id="prompt">{prompt}</h3>
      <br />

      <label htmlFor="theme" onClick={() => handleDisableSelect()}>
        Theme:{" "}
      </label>

      {keywords?.map((thing) => (
        <div key={thing.id}>
          <h2>{thing.keyword}</h2>
          <p>{thing.category}</p>
          <p>{thing.subCategory}</p>
          <p>{thing.subCategoryType ? thing.subCategoryType : "n/a" }</p>
          <p>{thing.lastPing}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
