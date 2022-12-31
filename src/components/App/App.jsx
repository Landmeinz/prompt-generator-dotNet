import React, { useState, useEffect } from "react";
import axios from "axios";
import { ThemeProvider } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from 'react-redux';
import {
  // BrowserRouter,
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

// --- Components --- //
import Nav from "../Nav/Nav.jsx";
import Home from "../_Pages/Home.jsx";
import Admin from "../_Pages/Admin.jsx";
import Footer from "../Footer/Footer.jsx";

// --- MUI --- //
import { Box } from "@mui/material";

// --- Sx Styles --- //
import { theme, transApp, sxApp, sxAppContainer } from "../sxStyles";

function App() {
  const dispatch = useDispatch();
  // const currentDate = useSelector((store) => store.currentDate);

  useEffect(() => {
    // fetchCurrentDate();
    // dispatch({ type: "FETCH_CURRENT_DATE" });
    dispatch({ type: "FETCH_CATEGORIES" });
    // dispatch({ type: "FETCH_KEYWORDS" });
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Box id="sxApp" sx={sxApp}>
        <Helmet>
          <title>Prompt Generator</title>
          <meta
            name="description"
            content="text prompt generator for midjourney, a.i. art."
          />
          <meta
            name="keywords"
            content="midjourney, themes, art, prompt, creative prompts, generate, welcome"
          />
          <meta
            name="author"
            content="Eric Meinzer, landmeinz, zer made, tinker group"
          />
        </Helmet>

        <Box id="sxAppContainer" sx={sxAppContainer}>
          <Router>
            <AnimatePresence mode="wait" initial={true}>
              <motion.div
                initial={transApp.initial}
                animate={transApp.animate}
                exit={transApp.exit}
                style={transApp.style}
                transition={transApp.time}
              >
                {/* <Nav /> */}
                <Routes>
                  <Route path="/" element={<Navigate to="/home" />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/admin" element={<Admin />} />
                </Routes>
              </motion.div>
            </AnimatePresence>
          </Router>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
