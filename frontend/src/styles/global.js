import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;

    background-color: #FAFAFA;
    min-height: 100vh;

    font-family: 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
  }
  
  .Toastify__toast--default {
    background-color: #5BA885;
  }

  .Toastify__progress-bar--default {
    background: #fff;
  }

  .Toastify__toast-body {
    color: #fff;
  }
`;
