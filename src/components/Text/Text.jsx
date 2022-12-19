import React, { useState, useEffect } from "react";
import { ENDPOINTS, createApiEndpoint } from "../_Services/apiServices";

function Text() {
  // this will need to be updated to an array to handle items from multiple categories //
  const [prompt, setPrompt] = useState("");
  const [disableSelect, setDisableSelect] = useState({});
  const [data, setData] = useState([]);
  const Themes = ["one", "five", "three"];

  // let's sort our categories first //
  Themes.sort();
  data.sort();

  useEffect(() => {
    // fetchData();
    fetchData();
  }, []);

  // function fetchData() {
  //   let response = createApiEndpoint(ENDPOINTS.weatherforecast)
  //     .fetch()
  //     .then((response) => console.log(response))
  //     .catch((error) => console.log(error));

  //   let responseData = response.json;
  //   setData(responseData);
  // }

  async function fetchData() {
    try {
      const response = createApiEndpoint(ENDPOINTS.weatherforecast)
        .fetch()
        .then((response) => setData(response.data));
      return response;
    } catch (err) {
      console.log(err);
    }
  }

  function handleClick() {
    console.log("clicked on randomTheme");
    setPrompt(Themes[Math.floor(Math.random() * Themes.length)]);
  }

  function handleDisableSelect() {
    setDisableSelect(!disableSelect);
    console.log("data:", data);
  }

  return (
    <div>
      <h1>Generate Random Words For MidJourney</h1>
      <button onClick={() => handleClick()}>Generate</button>

      <br />
      <label htmlFor="prompt">Prompt: </label>
      <h3 id="prompt">{prompt}</h3>
      <br />

      <label htmlFor="theme" onClick={() => handleDisableSelect()}>
        Theme:{" "}
      </label>

      {disableSelect ? (
        <select name="theme" id="theme" disabled>
          {Themes.map((theme, i) => (
            <option key={i} value="{theme}">
              {theme}
            </option>
          ))}
        </select>
      ) : (
        <select name="theme" id="theme">
          {Themes.map((theme, j) => (
            <option key={j} value="{theme}">
              {theme}
            </option>
          ))}
        </select>
      )}

      {data?.map((item, k) => (
       <h1 key={k}>{item.summary}</h1>
      ))}
    </div>
  );
}

export default Text;
