import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    /* NAVBAR */
    --navbar-size: 66px;
    /* WRAPPER */
    --wrapper-width-web: 912px;
    --wrapper-width-mobile: 90%;
    /* COLOR */
    --color-primary: #6246E9;
    --color-secondary: #FE546F;
    --color-white: #FFFFFF;
    --color-black: #232323;
    --color-gray: #E8E8E8;
    --color-light-gray: #F5F5F590;
    --color-dark-gray: #909090;
  }

  * {
    color: var(--color-black);
    user-select: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  html {
    min-height: 100%;
    overflow-y: scroll;
    background-color: var(--color-white);
  }

  #main {
    margin-top: var(--navbar-size);
  }

  .container {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .wrapper {
    width: var(--wrapper-width-web);
  }

  @media only screen and (min-width: 1400px) {
    html {
      zoom: 120%;
    }
  }
`;