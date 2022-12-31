import React from "react";
import { useNavigate } from "react-router-dom";

// --- MUI --- //
import { Typography, Button } from "@mui/material";

// --- Sx Styles --- //
import {
  sxGenerateButtonContainer,
  sxGenerateButton,
  // sxBreaksH4,
} from "../sxStyles";

function GenerateButton() {

  const navigate = useNavigate();

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
      <Button sx={sxGenerateButton}>
        Generate!
      </Button>
    </Typography>
  );
}
export default GenerateButton;
