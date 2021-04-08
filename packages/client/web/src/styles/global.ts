import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --blue: #04A3FB;
    --orange: #FB6404;
    --gray: #828486;
    --dark: #3F3D56;
    --white: #FAFAFA;
    --green: #24AF01;
    --red: #FF4004;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%; /* 1rem = 15px */
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%; /* 1rem = 14px */
    }
  }

  body {
    background: var(--white);
    color: var(--gray);
  }

  body, input, textarea, select, button {
    font: 400 1rem "Roboto", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
