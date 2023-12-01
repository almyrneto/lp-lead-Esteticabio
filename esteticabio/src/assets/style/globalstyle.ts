import { createGlobalStyle } from "styled-components";
import { colors } from "../../theme";

export const GlobalStyle = createGlobalStyle`
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
    body, html, button, input, select {
        font-family: 'Montserrat';
    }
    body {
        background: ${colors.secundaria};
    } 
}
`