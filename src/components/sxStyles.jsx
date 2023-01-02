// responsiveFontSizes
import { createTheme } from "@mui/material/styles";

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

// ----- App ----- //
// ----- App ----- //
// ----- App ----- //
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

export const sxApp = {
  // border: 1,
  // border: '1px solid red',
  position: "absolute",
  // borderColor: "secondary",
  bgcolor: "hsla(220, 20%, 20%, 1)",
  height: "100vh",
  overflow: "hidden",
  overflowY: "hidden",
  overflowX: "hidden",
  m: 0,
  p: 0,
  zIndex: 1000,

};

export const sxAppContainer = {
  height: "100%",
  // position: "absolute",
  backgroundColor: "secondary",

  // pb: 20,
};

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
// ----- App ----- //
// ----- App ----- //
// ----- App ----- //

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

export const sxNavText = {
  color: "secondary.main",
};

export const sxTinkerSubText = {
  display: "flex",
  justifyContent: "center",
  gap: "2vh",
  color: "secondary.main",
};
// ----- Nav ----- //
// ----- Nav ----- //
// ----- Nav ----- //

// ----- Shared On All Pages ----- //
// ----- Shared On All Pages ----- //
// ----- Shared On All Pages ----- //
export const sxContactTitle = {
  cursor: "pointer",

  "&:hover": {
    color: "secondary.main",
    transform: "scale(1.02)",
    transition: ".2s",
  },
};
export const sxHeroText = {
  color: "primary.light",
  fontWeight: "bold", // normal, bold, light
  textAlign: "center",

  [theme.breakpoints.down("xl")]: {
    fontSize: "7.4rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "6rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "4rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "4rem",
  },
};
// ----- Shared On All Pages ----- //
// ----- Shared On All Pages ----- //
// ----- Shared On All Pages ----- //

// ----- CardsAdditionalDetails ----- //
// ----- CardsAdditionalDetails ----- //
// ----- CardsAdditionalDetails ----- //
export const sxAdditionalDetailsTitle = {
  // border: "1px solid red",
  textAlign: "center",
  mx: 21,
  lineHeight: "1",
  color: "info.light",
  mb: 2,

  [theme.breakpoints.down("xl")]: {
    mx: 21,
  },
  [theme.breakpoints.down("lg")]: {
    mx: 13,
  },
  [theme.breakpoints.down("md")]: {
    mx: 8,
  },
  [theme.breakpoints.down("sm")]: {
    mx: 5,
  },
};

export const sxDetailsContainer = {
  display: "flex",
  flexDirection: "column",
  gap: 1,
  color: "info.light",
  px: 10,
};
// ----- CardsAdditionalDetails ----- //
// ----- CardsAdditionalDetails ----- //
// ----- CardsAdditionalDetails ----- //

// ----- CardDefineLeft --- //
// ----- CardDefineLeft --- //
// ----- CardDefineLeft --- //
export const sxCardDefineLeftContainer = {
  // border: "1px solid red",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  bgcolor: "primary.light",
  borderRadius: 6,
  minWidth: "350px",
  mr: "8vw",

  [theme.breakpoints.down("xl")]: {
    flexDirection: "row",
  },
  [theme.breakpoints.down("lg")]: {
    flexDirection: "row",
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "row",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    display: "flex",
    gap: 2,
    m: 0,
    pb: 2,
    mx: 4,
  },
};
// ----- CardDefineLeft --- //
// ----- CardDefineLeft --- //
// ----- CardDefineLeft --- //

// ----- CardDefineRight --- //
// ----- CardDefineRight --- //
// ----- CardDefineRight --- //
export const sxCardDefineRightContainer = {
  //   border: "1px solid red",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  bgcolor: "primary.light",
  borderRadius: 5,
  ml: "8vw",

  [theme.breakpoints.down("xl")]: {
    flexDirection: "row",
  },
  [theme.breakpoints.down("lg")]: {
    flexDirection: "row",
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "row",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    display: "flex",
    gap: 2,
    m: 0,
    pt: 2,
    mx: 4,
  },
};
// ----- CardDefineRight --- //
// ----- CardDefineRight --- //
// ----- CardDefineRight --- //

// ----- CardDefine SHARED --- //
// ----- CardDefine SHARED --- //
// ----- CardDefine SHARED --- //
export const sxTinkerDefined = {
  //   border: "1px solid green",
  px: 5,
  py: 3,
  display: "flex",
  flexDirection: "column",
  gap: 2,
  width: "60%",
  height: "inherit",
  bgcolor: "info.light",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    borderRadius: 2.5,
  },
};

export const sxCardDefineBody = {
  display: "flex",
  flexDirection: "column",
  gap: 2,

  [theme.breakpoints.down("xl")]: {
    fontSize: "7.4rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "6rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "4rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.5rem",
  },
};

export const sxBoxColor = {
  // border: "1px solid purple",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
};

export const sxCircleFrame = {
  borderRadius: "50%",
  height: "15rem",
  width: "15rem",
  objectFit: "cover",
};

export const sxCenterCircle = {
  display: "flex",
  alignItems: "center",
};

export const sxCardDefineH4 = {
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.75rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.75rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.25rem",
  },
};
// ----- CardDefine SHARED --- //
// ----- CardDefine SHARED --- //
// ----- CardDefine SHARED --- //

// ----- CardProject --- //
// ----- CardProject --- //
// ----- CardProject --- //
export const sxProjectImageContent = {
  display: "flex",
  flexDirection: "column",
};

export const sxCardProject = {
  width: "20rem",
  height: "20rem",
  mb: 1,
  borderRadius: 2,
};

export const sxImageCaption = {
  color: "info.light",
  width: "20rem",
};
// ----- CardProject --- //
// ----- CardProject --- //
// ----- CardProject --- //

// ----- CategoryPill --- //
// ----- CategoryPill --- //
// ----- CategoryPill --- //

export const sxCategoryPillContainer = {
  // border: "1px solid purple",
  // display: "flex",
  // justifyContent: "center",
  // alignItems: "center",
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
    // color: "secondary.main",
    // transform: "scale(1.05)",
    transition: ".25s",
    boxShadow: 3,
  },

  "&:active": {
    backgroundColor: "primary.dark",
    // color: "secondary.main",
    // transform: "scale(1.05)",
    transition: ".25s",
    transform: "scale(1.05)",
    transition: ".1s",
    boxShadow: 1,
  },
};

export const sxCategoryPillContainerSelected = {
    // border: "1px solid purple",
  // display: "flex",
  // justifyContent: "center",
  // alignItems: "center",
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
    // color: "secondary.main",
    // transform: "scale(1.05)",
    transition: ".25s",
    boxShadow: 3,
  },

  "&:active": {
    backgroundColor: "primary.dark",
    // color: "secondary.main",
    // transform: "scale(1.05)",
    transition: ".25s",
    transform: "scale(1.05)",
    transition: ".1s",
    boxShadow: 1,
  },
};

// ----- CategoryPill --- //
// ----- CategoryPill --- //
// ----- CategoryPill --- //

// ----- Contact --- //
// ----- Contact --- //
// ----- Contact --- //
export const sxContactSectionOne = {
  display: "flex",
  flexDirection: "column",
  // alignItems: "center",`
  justifyContent: "center",
  alignItems: "center",
  gap: 17,
  mt: 12,
};

export const sxContactText = {
  color: "primary.light",
  fontWeight: "bold", // normal, bold, light
  textAlign: "center",
  userSelect: "none",

  [theme.breakpoints.down("xl")]: {
    fontSize: "7.4rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "6rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "4rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "3rem",
  },
};

export const sxInputText = {
  // border: "1px solid red",
  bgcolor: "info.light",
  color: "secondary.main",
  borderRadius: 3,
  width: "100%",
};

export const sxInputContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 3,
  minWidth: "60vw",

  [theme.breakpoints.down("xl")]: {
    minWidth: "70vw",
  },
  [theme.breakpoints.down("lg")]: {
    minWidth: "75vw",
  },
  [theme.breakpoints.down("md")]: {
    minWidth: "80vw",
  },
  [theme.breakpoints.down("sm")]: {
    minWidth: "90vw",
  },
};

export const sxMessageButtonContainer = {
  // border: "1px solid red",
  display: "flex",
  gap: 2,
};

export const sxPostButton = {
  bgcolor: "secondary.main",
  color: "primary.light",
  //   width: "35vw",
  height: "8vh",
  border: 1,
  lineHeight: 1.1,
  borderColor: "info.light",
  fontWeight: "bold",
  transition: ".25s",

  "&:hover": {
    bgcolor: "primary.light",
    color: "secondary.main",
    transform: "scale(1.05)",
    transition: ".25s",
  },

  [theme.breakpoints.down("xl")]: {
    fontSize: "1.5rem",
    // width: "35vw",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.25rem",
    // width: "40vw",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
    // width: "80vw",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
    // width: "90vw",
  },
};

export const sxMessageBoardContainer = {
  // border: "1px solid red",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

export const sxMessageBoardHeader = {
  // border: "1px solid green",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  py: 1.618,
};
// ----- Contact --- //
// ----- Contact --- //
// ----- Contact --- //

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

export const sxHomeContainer = {
  // border: "1px solid red",
  // height: "100vh",
};

export const sxHomeSectionOne = {
  // border: "1px solid blue",
  display: "flex",
  flexDirection: "row",
  // alignItems: "center",`
  justifyContent: "center",
  gap: 8,
  mt: 8 ,
  px: 4,
};

export const sxButtonContainer = {
  // border: "1px solid blue",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
  width: "1fr",
};

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

export const sxHomeChipContent = {
  // border: "1px solid blue",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  gap: 1,
  my: "auto",
};

export const sxChip = {
  // border: "1px solid blue",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",

  "&:hover": {
    backgroundColor: "primary.dark",
    transform: "scale(1.025)",
  },
  "&:active": {
    color: "info.dark",
    transform: "scale(1.04)",
  },
};
// ----- Home ----- //
// ----- Home ----- //
// ----- Home ----- //

// ----- Crafts ----- //
// ----- Crafts ----- //
// ----- Crafts ----- //
export const sxCraftsSectionOne = {
  // border: "1px solid red",
  display: "flex",
  flexDirection: "column",
  // alignItems: "center",
  justifyContent: "center",
  gap: 17,
  mt: 12,
  mx: "auto",
};

export const sxCraftsHeroText = {
  color: "primary.light",
  fontWeight: "bold", // normal, bold, light
  textAlign: "center",

  [theme.breakpoints.down("xl")]: {
    fontSize: "7.4rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "6rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "4rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "4rem",
  },
};

export const sxProjectContainer = {
  // border: "1px solid blue",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 2,
};

export const sxCardProjectGallery = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: 3,
  borderBottom: 1,
  borderColor: "primary.light",
  pb: 5,
  mx: 8,

  [theme.breakpoints.down("xl")]: {
    mx: 8,
  },
  [theme.breakpoints.down("lg")]: {
    mx: 8,
  },
  [theme.breakpoints.down("md")]: {
    mx: 5,
  },
  [theme.breakpoints.down("sm")]: {
    mx: 3,
  },
};
// ----- Crafts ----- //
// ----- Crafts ----- //
// ----- Crafts ----- //

// ----- EmailFOrm --- //
// ----- EmailFOrm --- //
// ----- EmailFOrm --- //
// export const sxDialogContainer = {
//     maxWidth: "md",

// }
// ----- EmailFOrm --- //
// ----- EmailFOrm --- //
// ----- EmailFOrm --- //

// ----- MessageBoard ----- //
// ----- MessageBoard ----- //
// ----- MessageBoard ----- //
export const sxMessageBoardContent = {
  // border: "1px solid blue",
  display: "flex",
  flexDirection: "column",
  gap: 2,
  bgcolor: "primary.light",
  p: 2,
  borderRadius: 4,
  width: "75vw",

  [theme.breakpoints.down("xl")]: {
    width: "70vw",
  },
  [theme.breakpoints.down("lg")]: {
    width: "75vw",
  },
  [theme.breakpoints.down("md")]: {
    width: "80vw",
  },
  [theme.breakpoints.down("sm")]: {
    width: "90vw",
  },
};

export const sxMessageBoardText = {
  bgcolor: "info.light",
  color: "secondary.main",
  borderRadius: 3,
  p: "1rem",
};

export const sxMsgBoardCardHeader = {
  // border: "1px solid green",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "3vw",
};

export const sxMsgBoardCardBody = {
  display: "flex",
  lineHeight: 4,
};

export const sxMsgBoardCardBodyText = {
  lineHeight: 1.1,

  [theme.breakpoints.down("xl")]: {
    fontSize: "1.25rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.25rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: ".9rem",
  },
};
// ----- MessageBoard ----- //
// ----- MessageBoard ----- //
// ----- MessageBoard ----- //

// ----- Products ----- //
// ----- Products ----- //
// ----- Products ----- //
export const sxProductSectionOne = {
  // border: "1px solid red",
  display: "flex",
  flexDirection: "column",
  // alignItems: "center",
  justifyContent: "center",
  gap: 17,
  mt: 12,
  mx: "auto",
};

export const sxProductHeroText = {
  color: "primary.light",
  fontWeight: "bold", // normal, bold, light
  textAlign: "center",

  [theme.breakpoints.down("xl")]: {
    fontSize: "7.4rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "6rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "4rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "4rem",
  },
};

export const sxProductContainer = {
  // border: "1px solid blue",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 2,
};

export const sxCardProductGallery = {
  // border: "1px solid red",
  // cursor: "pointer",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: 3,
  borderBottom: 1,
  borderColor: "primary.light",
  pb: 5,
  mx: 8,

  [theme.breakpoints.down("xl")]: {
    mx: 8,
  },
  [theme.breakpoints.down("lg")]: {
    mx: 8,
  },
  [theme.breakpoints.down("md")]: {
    mx: 5,
  },
  [theme.breakpoints.down("sm")]: {
    mx: 3,
  },
};
// ----- Products ----- //
// ----- Products ----- //
// ----- Products ----- //

// ----- ProductCard --- //
// ----- ProductCard --- //
// ----- ProductCard --- //
export const sxProductImageContent = {
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",

  "&:hover": {
    color: "primary.light",
    transform: "scale(1.025)",
  },
  "&:active": {
    color: "primary.light",
    transform: "scale(1.05)",
  },
};

export const sxCardProduct = {
  width: "20rem",
  height: "26.9rem",
  mb: 1,
  borderRadius: 2,
};

// export const sxImageCaption = {
//   color: "info.light",
//   width: "20rem",
// };
// ----- ProductCard --- //
// ----- ProductCard --- //
// ----- ProductCard --- //

// ----- ProductDetails --- //
// ----- ProductDetails --- //
// ----- ProductDetails --- //
export const sxCardProductDetail = {
  width: "50%",
  height: "50%",
  mb: 1,
  borderRadius: 2,
};
// ----- ProductDetails --- //
// ----- ProductDetails --- //
// ----- ProductDetails --- //

// ----- ProductDescription ----- //
// ----- ProductDescription ----- //
// ----- ProductDescription ----- //
export const sxProductDescriptionTitle = {
  // border: "1px solid red",
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  px: 8,
  py: 1.5,
  color: "info.light",

  [theme.breakpoints.down("xl")]: {
    px: 8,
  },
  [theme.breakpoints.down("lg")]: {
    px: 8,
  },
  [theme.breakpoints.down("md")]: {
    px: 5,
  },
  [theme.breakpoints.down("sm")]: {
    px: 3,
  },
};

export const sxProductDescriptionContent = {
  // border: "1px solid red",
  display: "flex",
  flexDirection: "column",
  gap: 1,
  color: "info.light",
  px: 8,

  [theme.breakpoints.down("xl")]: {
    px: 8,
  },
  [theme.breakpoints.down("lg")]: {
    px: 8,
  },
  [theme.breakpoints.down("md")]: {
    px: 5,
  },
  [theme.breakpoints.down("sm")]: {
    px: 3,
    textAlign: "center",
  },
};
// ----- ProductDescription ----- //
// ----- ProductDescription ----- //
// ----- ProductDescription ----- //

// ----- ProjectDescription ----- //
// ----- ProjectDescription ----- //
// ----- ProjectDescription ----- //
export const sxProjectDescriptionTitle = {
  // border: "1px solid red",
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  px: 8,
  py: 1.5,
  color: "info.light",

  [theme.breakpoints.down("xl")]: {
    px: 8,
  },
  [theme.breakpoints.down("lg")]: {
    px: 8,
  },
  [theme.breakpoints.down("md")]: {
    px: 5,
  },
  [theme.breakpoints.down("sm")]: {
    px: 3,
  },
};

export const sxProjectDescriptionContent = {
  // border: "1px solid red",
  display: "flex",
  flexDirection: "column",
  gap: 1,
  color: "info.light",
  px: 8,

  [theme.breakpoints.down("xl")]: {
    px: 8,
  },
  [theme.breakpoints.down("lg")]: {
    px: 8,
  },
  [theme.breakpoints.down("md")]: {
    px: 5,
  },
  [theme.breakpoints.down("sm")]: {
    px: 3,
    textAlign: "center",
  },
};
// ----- ProjectDescription ----- //
// ----- ProjectDescription ----- //
// ----- ProjectDescription ----- //

// ----- PromptOutput ----- //
// ----- PromptOutput ----- //
// ----- PromptOutput ----- //

export const sxPromptContainer = {
  // border: "1px solid blue",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  mx: 10,
  mt: 10,
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
  // border: "1px solid blue",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 2,
};

export const sxButtonTextContent = {
  // border: "1px solid green",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

export const sxTextInput = {
  // border: "1px solid purple",
  border: 1,
  borderColor: "info.light",
  borderRadius: 2,
  color: "white",
  backgroundColor: "secondary",
  width: "18rem",

  "&:active": {
    border: 1,
    borderColor: "info.light",
    borderRadius: 2,
    backgroundColor: "secondary",
    width: "18rem",
  },

};

// ----- UserInputs ----- //
// ----- UserInputs ----- //
// ----- UserInputs ----- //
