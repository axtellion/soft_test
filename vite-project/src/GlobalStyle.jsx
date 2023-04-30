import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
  body {
    position: relative;
  margin: 0;
 font-family: "Open Sans";
  color: #212121;
  background-color: #E8E8E8;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: white;
  font-weight: 400px;
  font-size: 16px;
  
  justify-content: center;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
}

button, 
button:active, 
button:focus {
    outline: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  h1,h2,h3,h4,h5,h6,p {
    
    margin: 0;
  }
 
  ul{
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  a{
    color: currentColor;
    text-decoration: none;
  }
`;
