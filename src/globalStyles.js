import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    /* ! MAIN STYLES */

    *, *:before, *:after {
        padding: 0;
        margin: 0;
        text-decoration: none;
        list-style: none;
        box-sizing: border-box;
    }

    body {
        ${'' /* overflow: hidden; */}
        background-color: #FAFAFA;
    }
`;
 
export default GlobalStyle;