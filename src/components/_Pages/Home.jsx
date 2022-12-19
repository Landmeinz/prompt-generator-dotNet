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
  }, []);

  function fetchKeywords() {
    try {
      const response = createApiEndpoint(ENDPOINTS.keyword)
        .fetch()
        .then((response) => setKeywords(response.data));
      return response;
    } catch (err) {
      console.log(err);
    }
  }

  function handleClick() {
    console.log("clicked on randomTheme");
    setPrompt(keywords[Math.floor(Math.random() * keywords.length)]);
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
          <p>{thing.subCategoryType}</p>
          <p>{thing.lastPing}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
