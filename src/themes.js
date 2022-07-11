import { createGlobalStyle, GlobalStyleComponent } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
}

body {
    color: ${(props) => props.theme.color};
    background-color: ${(props) => props.theme.backgroundColor};
    font-weight: ${(props) => props.theme.fwLight};
    transition: all .5s ease;
}
`;

// - Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
// - Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
// - Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
// - Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
// - Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
// - White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)

export const lightTheme = {
  color: "hsl(200, 15%, 8%)",
  backgroundColor: "hsl(0, 0%, 98%)",
  colorsUiBase: "hsl(0, 0%, 100%)",
  lightInput: "hsl(0, 0%, 52%)",
  shadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  fsSm: "14px",
  fsMd: "16px",
  fwLight: "300",
  fwNormal: "600",
  fwBold: "800",
  radii: "0.5rem",
};

export const darkTheme = {
  color: "hsl(0, 0%, 100%)",
  backgroundColor: "hsl(207, 26%, 17%)",
  colorsUiBase: "hsl(209, 23%, 22%)",
  fsSm: "14px",
  fsMd: "16px",
  fwLight: "300",
  fwNormal: "600",
  fwBold: "800",
  radii: "0.5rem",
};
