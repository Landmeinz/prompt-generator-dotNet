// responsiveFontSizes
import { createTheme } from "@mui/material/styles";

// ----- Theme ----- //
// ----- Theme ----- //
// ----- Theme ----- //

export const theme = createTheme({
  palette: {
    primary: {
      main: "hsla(14, 77%, 44%, 1)",
      dark: "hsla(14, 77%, 32%, 1)",
      light: "hsla(14, 77%, 56%, 1)",
    },
    secondary: {
      main: "hsla(220, 20%, 20%, 1)",
      dark: "hsla(312, 14%, 36%, 1)",
      light: "hsla(180, 78%, 48%, 1)",
    },
    error: {
      main: "hsla(350, 90%, 40%, 1)",
    },
    info: {
      main: "hsla(330, 10%, 12%, 1)",
      dark: "hsla(330, 10%, 4%, 1)",
      light: "hsla(330, 10%, 82%, 1)",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

// ----- Theme ----- //
// ----- Theme ----- //
// ----- Theme ----- //

// ----- Transitions ----- //
// ----- Transitions ----- //
// ----- Transitions ----- //
export const trans = {
  time: { duration: 0.75 },
  initial: { rotate: 0, y: 0, opacity: 0 },
  animate: { rotate: 0, y: 0, opacity: 1 },
  // exit:       { rotate: -30 },
};

export const transApp = {
  time: { duration: 1.25 },
  initial: { rotate: 0, y: 0, opacity: 0 },
  animate: { rotate: 0, y: 0, opacity: 1 },
};
// ----- Transitions ----- //
// ----- Transitions ----- //
// ----- Transitions ----- //

// ----- BreakPoints ----- //
// ----- BreakPoints ----- //
// ----- BreakPoints ----- //

export const sxBreaksH4 = {
  [theme.breakpoints.down("xl")]: {
    fontSize: "2.25rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1.75rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
  },
};

export const sxBreaksH5 = {
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.75rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1.1rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.1rem",
  },
};

export const sxBreaksH6 = {
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.35rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1.25rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.15rem",
  },
};

export const sxNavH6 = {
  cursor: "pointer",

  "&:hover": {
    color: "primary.light",
    transform: "scale(1.05)",
  },

  [theme.breakpoints.down("xl")]: {
    fontSize: "1.25rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.15rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1.05rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.05rem",
  },
};

// ----- BreakPoints ----- //
// ----- BreakPoints ----- //
// ----- BreakPoints ----- //


// ----- App ----- //
// ----- App ----- //
// ----- App ----- //

export const sxApp = {
  // border: '1px solid red',
  position: "absolute",
  bgcolor: "hsla(220, 20%, 20%, 1)",
  height: "100vh",
  m: 0,
  p: 0,
};

export const sxAppContainer = {
  // border: '1px solid red',
  height: "100%",
  backgroundColor: "secondary",

};

// ----- App ----- //
// ----- App ----- //
// ----- App ----- //

// ----- CategoryList --- //
// ----- CategoryList --- //
// ----- CategoryList --- //

export const sxCategoryList = {
  // border: "1px solid green",
  wordWrap: "break-word",
  width: "3fr",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  px: 5,
};

export const sxCategoryChipContent = {
  // border: "1px solid blue",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  gap: 1,
  my: "auto",
};

// ----- CategoryList --- //
// ----- CategoryList --- //
// ----- CategoryList --- //

// ----- CategoryPill --- //
// ----- CategoryPill --- //
// ----- CategoryPill --- //

export const sxCategoryPillContainer = {
  // border: "1px solid purple",
  px: ".8rem",
  py: ".4rem",
  borderRadius: 5,
  color: "info.light",
  backgroundColor: "hsla(14, 77%, 44%, 1)",
  boxShadow: 2,
  userSelect: "none",

  "&:hover": {
    cursor: "pointer",
    backgroundColor: "primary.dark",
    transition: ".25s",
    boxShadow: 3,
  },

  "&:active": {
    backgroundColor: "primary.dark",
    transition: ".25s",
    transform: "scale(1.05)",
    transition: ".1s",
    boxShadow: 1,
  },
};

export const sxCategoryPillContainerSelected = {
  // border: "1px solid purple",
  px: ".8rem",
  py: ".4rem",
  borderRadius: 5,
  color: "info.light",
  backgroundColor: "hsla(14, 77%, 26%, 1)",
  boxShadow: 2,
  userSelect: "none",

  "&:hover": {
    cursor: "pointer",
    backgroundColor: "primary.dark",
    transition: ".25s",
    boxShadow: 3,
  },

  "&:active": {
    backgroundColor: "primary.dark",
    transition: ".25s",
    transform: "scale(1.05)",
    transition: ".1s",
    boxShadow: 1,
  },
};

// ----- CategoryPill --- //
// ----- CategoryPill --- //
// ----- CategoryPill --- //

// ----- Footer ----- //
// ----- Footer ----- //
// ----- Footer ----- //

export const sxFooterContainer = {
  // border: "1px solid red",
  height: "1.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  bgcolor: "info.light",
  color: "secondary.main",

  position: "absolute",
  bottom: 0,
};

// ----- Footer ----- //
// ----- Footer ----- //
// ----- Footer ----- //

// ----- GenerateButton --- //
// ----- GenerateButton --- //
// ----- GenerateButton --- //

export const sxGenerateButtonContainer = {
  // border: "1px solid red",
  display: "flex",
  justifyContent: "center",
};

export const sxGenerateButton = {
  bgcolor: "secondary.main",
  color: "primary",
  border: 1,
  borderRadius: "50%",
  borderColor: "info.light",
  fontWeight: "bold",
  transition: ".25s",
  boxShadow: 5,

  "&:hover": {
    bgcolor: "primary.light",
    color: "secondary.main",
    transform: "scale(1.05)",
    transition: ".25s",
    boxShadow: 2,
  },

  [theme.breakpoints.down("xl")]: {
    fontSize: "1.618rem",
    width: "188px",
    height: "188px",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.25rem",
    width: "168px",
    height: "168px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
    width: "138px",
    height: "138px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
    width: "118px",
    height: "118px",
  },
};
// ----- GenerateButton --- //
// ----- GenerateButton --- //
// ----- GenerateButton --- //

// ----- Home ----- //
// ----- Home ----- //
// ----- Home ----- //

// export const sxHomeContainer = {
// };

export const sxHomeSectionOne = {
  // border: "1px solid blue",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: 8,
  mt: 8,
  px: 4,
};

export const sxButtonContainer = {
  // border: "1px solid blue",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 6,
  width: "1fr",
};

// ----- Home ----- //
// ----- Home ----- //
// ----- Home ----- //

// ----- Nav ----- //
// ----- Nav ----- //
// ----- Nav ----- //
export const sxNavContainer = {
  // border: "1px solid red",
  py: 2,
  px: 2,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "sticky",
  top: 0,
  bgcolor: "info.light",
  boxShadow: 3,
  zIndex: 1000,
};

// ----- Nav ----- //
// ----- Nav ----- //
// ----- Nav ----- //


// ----- PromptOutput ----- //
// ----- PromptOutput ----- //
// ----- PromptOutput ----- //

export const sxPromptContainer = {
  // border: "1px solid blue",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  mx: 10,
  mt: 8,
  gap: 3,
  color: "info.light",
};

export const sxPromptCopy = {
  //  border: "1px solid blue",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 2,
};

export const sxCopyButton = {
  backgroundColor: "primary.main",
  color: "secondary.main",
  fontWeight: "bold",
};

export const sxPromptOutput = {
  display: "flex",
  flexDirection: "row",
  border: 1,
  borderColor: "info.light",
  minWidth: "85%",
  height: "5rem",
  mx: 4,
  p: 2,
  borderRadius: 4,
};

// ----- PromptOutput ----- //
// ----- PromptOutput ----- //
// ----- PromptOutput ----- //

// ----- UserInputs ----- //
// ----- UserInputs ----- //
// ----- UserInputs ----- //

export const sxUserInputContainer = {
  // border: "1px solid yellow",
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "start",
  alignItems: "center",
  gap: 1,
};

export const sxButtonTextContent = {
  // border: "1px solid green",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 1,
};

export const sxAddTextButton = {
  // border: "1px solid blue",
  width: "100%",
  hight: "100%",
  backgroundColor: "primary.main",

  "&:hover": {
    backgroundColor: "primary.dark",
  },
};

export const sxTextInput = {
  // border: "1px solid purple",
  border: 1,
  borderColor: "info.light",
  borderRadius: 1,
  color: "info.light !important",
  backgroundColor: "secondary",
  width: "18rem",

};

// ----- UserInputs ----- //
// ----- UserInputs ----- //
// ----- UserInputs ----- //
