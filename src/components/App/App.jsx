import React, { useState, useEffect } from "react";
import axios from "axios";
import { ThemeProvider } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
// import { useDispatch, useSelector } from 'react-redux';
// import { store } from '../../redux/store';
import {
  // BrowserRouter,
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

// // --- Components --- //
// import Crafts from "../_Pages/Crafts";
// import Products from "../_Pages/Products";
// import ProductDetails from "../_Pages/ProductDetails"
// import About from "../_Pages/About";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
// import Contact from "../_Pages/Contact";
import Home from "../_Pages/Home.jsx";

// --- MUI --- //
import { Box } from "@mui/material";

// --- Sx Styles --- //
import { theme, transApp, sxApp, sxAppContainer } from "../sxStyles";

function App() {
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
                <Nav />
                <Routes>
                  <Route path="/" element={<Navigate to="/home" />} />
                  <Route
                    path="/home"
                    element={<Home />}
                  />
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
