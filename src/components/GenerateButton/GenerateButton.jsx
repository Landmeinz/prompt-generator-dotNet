import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// --- MUI --- //
import { Typography, Button } from "@mui/material";

// --- Sx Styles --- //
import {
  sxGenerateButtonContainer,
  sxGenerateButton,
  // sxBreaksH4,
} from "../sxStyles";

function GenerateButton() {

  // useEffect(() => {
  //   // fetchCurrentDate();
  //   // dispatch({ type: "FETCH_CURRENT_DATE" });
  //   dispatch({ type: "FETCH_RANDOM_KEYWORDS" });
  // }, [dispatch]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectedCategories = useSelector((store) => store.selectedCategories);

  function getRandomKeywords() {
    return dispatch({
      type: "FETCH_RANDOM_KEYWORDS",
      payload: selectedCategories,
    });
  }

  function handleGenerate() {
    // window.scrollTo(0, 0);
    console.log("--- generate! ---");
  } // handleNav

  function handleNav(path) {
    navigate(path);
    window.scrollTo(0, 0);
  } // handleNav

  return (
    <Typography variant="h4" sx={sxGenerateButtonContainer}>
      {/* <Button onClick={() => handleNav('/admin')} sx={sxGenerateButton}> */}
      <Button sx={sxGenerateButton} onClick={() => getRandomKeywords()}>
        Generate!
      </Button>
    </Typography>
  );
}
export default GenerateButton;
