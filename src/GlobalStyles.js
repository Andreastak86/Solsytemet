import styled, { createGlobalStyle } from "styled-components";

export const Box = styled.div`
  margin: 2rem;
`;

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Roboto Mono', monospace;
        color: white;
        box-sizing: border-box;
        /* overflow-x: hidden; */

    }
    
`;
