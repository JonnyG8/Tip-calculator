import { createGlobalStyle } from "styled-components"

let GlobalsTyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: ${props => props.theme.background};
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default GlobalsTyles;