import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle `
    *{
        width: 100vw;
        background-color: black;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        max-width: 100%;
    }
   html, body, #root {
        height: 100%;
   }
   *, button, input {
        border: 0;
        outline: none;
        font-family: Roboto, sans-serif;
   }
   button {
        cursor: pointer;
   }
   `