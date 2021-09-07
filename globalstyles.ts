import { createGlobalStyle } from 'styled-components';
import theme from './theme/main-theme';

const GlobalStyle = createGlobalStyle`
  :root {
    --x-offset: 0;
    --y-offset: 0;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
  ::selection { background: rgba(255, 201, 176, .6); }
  body {
    font-family: ${theme.fonts.openSans}, sans-serif;
    background: ${theme.color.white};
    color: ${theme.color.black};
    margin: 0;
    padding: 0; 
    background: black;
  }
  a {
    color: currentColor;
    display: block;
    text-decoration: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    font-weight: normal;
  }
  img {
    display: block;
    height: auto;
    width: 100%;
  }
  input,
  select {
    border: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
  ol,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  button {
    cursor: pointer;
    background: transparent;
    font-family: ${theme.fonts.roboto}, sans-serif;
    border: none;
    padding: 0;
  }
  *:focus {
    outline: 1px solid ${theme.color.black};
  }

  [id="__next"] {
      height: 100%;
  }
`;

export default GlobalStyle;