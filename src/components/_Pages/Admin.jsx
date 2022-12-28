import React, { useState, useEffect } from "react";
import { ENDPOINTS, createApiEndpoint } from "../_Services/apiServices";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// --- COMPONENTS --- //
import GenerateButton from "../GenerateButton/GenerateButton";
import CategoryList from "../CategoryList/CategoryList";
import HelmetWrap from "../_HelmetWrap/HelmetWrap";

// --- MUI --- //
import {
  Typography,
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
  TextField,
} from "@mui/material";

// --- SX STYLES --- //
import {
  trans,
  sxHomeSectionOne,
  sxHomeTextContent,
  sxHeroText,
  sxHomeChipContent,
} from "../sxStyles";

function Admin() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [bio, setBio] = useState("");
  const [pic, setPic] = useState("");
  const [location, setLocation] = useState("");
  const [birthday, setBirthday] = useState(null);
  const [gender, setGender] = useState(null);
  const [maritalStatus, setMaritalStatus] = useState(null);
  const [familySize, setFamilySize] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const navigate = useNavigate();

  const registerUser = (event) => {
    // event.preventDefault();

    if (password === confirmPassword) {
        console.log("hello");
    //   dispatch({
    //     type: "REGISTER",
    //     payload: {
    //       username: username,
    //       email: email,
    //       password: password,
    //       bio: bio,
    //       pic: pic,
    //       location: location,
    //       birthday: birthday,
    //       gender: gender,
    //       maritalStatus: maritalStatus,
    //       familySize: familySize,
    //       isAdmin: isAdmin,
    //     },
    //   });
    //   alert(
    //     "Friendly reminder to REMEMBER YOUR PASSWORD! Warning: Password Recovery is not currently available"
    //   );
    // //   navigate("/home");
    // } else {
    //   alert("Error: Email or Passwords Don't Match");
    }
  }; // registerUser

  // INPUT text styles
  const sxInput = {
    mb: 1,
  };

  // FORM CONTAINER holds all the page content
  const sxFormContainer = {
    // border: '1px solid red',
    display: "flex",
    flexDirection: "column",
  };

  // FORM CONTENT holds the "register new user" title and all of the input boxes
  const sxFormContent = {
    // border: '1px solid blue',
    display: "flex",
    flexDirection: "column",
    mx: "auto",
    width: "100%",
  };

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
          <form sx={sxFormContainer} onSubmit={registerUser}>
            <Box sx={sxFormContent}>
              <Typography
                sx={{ mb: 3, textAlign: "center" }}
                variant="h4"
                id="register"
              >
                Register New User
              </Typography>

              {/* {errors.registrationMessage && (
                <h3 className="alert" role="alert">
                  {errors.registrationMessage}
                </h3>
              )} */}

              {/* USERNAME */}
              <TextField
                sx={sxInput}
                id="registerUsername"
                required
                label="Username for Login"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                // placeholder="Username"
              />

              {/* EMAIL */}
              <TextField
                sx={sxInput}
                id="email"
                required
                label="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                // placeholder="Username"
              />

              {/* BIO */}
              <TextField
                sx={sxInput}
                id="bio"
                label="Bio"
                value={bio}
                onChange={(event) => setBio(event.target.value)}
              />

              {/* PIC URL */}
              <TextField
                sx={sxInput}
                id="pic"
                label="Profile Image URL"
                value={pic}
                onChange={(event) => setPic(event.target.value)}
              />

              {/* LOCATION */}
              <TextField
                sx={sxInput}
                id="location"
                label="Location"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
              />

              {/* BIRTHDAY */}
              <TextField
                sx={sxInput}
                type="date"
                id="birthday"
                label="Birthday"
                value={birthday}
                onChange={(event) => setBirthday(event.target.value)}
                InputLabelProps={{ shrink: true }}
              />

              {/* GENDER SELECTION */}
              <FormControl>
                <InputLabel id="gender">Gender</InputLabel>
                <Select
                  sx={sxInput}
                  variant="outlined"
                  labelId="gender"
                  id="gender"
                  name="gender"
                  value={gender}
                  onChange={(event) => setGender(event.target.value)}
                >
                  <MenuItem value={"Female"}>Female</MenuItem>
                  <MenuItem value={"Male"}>Male</MenuItem>
                  <MenuItem value={"Other"}>Other</MenuItem>
                  <MenuItem value={"Prefer not to answer"}>
                    Prefer not to answer
                  </MenuItem>
                </Select>
              </FormControl>

              {/* FAMILY SIZE */}
              <TextField
                sx={sxInput}
                type="number"
                id="familySize"
                label="Family size"
                value={familySize}
                onChange={(event) => setFamilySize(event.target.value)}
              />

              {/* RELATIONSHIP SELECTION */}
              <FormControl>
                <InputLabel id="">Marital Status</InputLabel>
                <Select
                  sx={sxInput}
                  variant="outlined"
                  labelId="maritalStatusId"
                  label="maritalStatus"
                  id="maritalStatus"
                  name="Marital status"
                  value={maritalStatus}
                  onChange={(event) => setMaritalStatus(event.target.value)}
                >
                  <MenuItem value={"Single"}>Single</MenuItem>
                  <MenuItem value={"Married"}>Married</MenuItem>
                  <MenuItem value={"Partnership"}>Partnership</MenuItem>
                  <MenuItem hidden value={"Prefer not to answer"}>
                    Prefer not to answer
                  </MenuItem>
                </Select>
              </FormControl>

              {/* PASSWORD */}
              <TextField
                sx={sxInput}
                id="registerPassword"
                type="password"
                required
                label="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />

              {/* CONFIRM PASSWORD */}
              <TextField
                sx={sxInput}
                id="confirmPassword"
                type="password"
                required
                label="Confirm Password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />

              {/* LET'S START COOKING */}
              <Button
                type="submit"
                size="large"
                variant="contained"
                color="primary"
              >
                Register & Login
              </Button>
            </Box>
          </form>
        </Box>
      </motion.div>
    </Box>
  );
}

export default Admin;
