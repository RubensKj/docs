import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html body #root {
    height: 100%;
    color: #161e2e;
  }

  body {
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, Helvetica Neue, Arial, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  }

  button, input {
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, Helvetica Neue, Arial, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  }

  :root {
    --max-width: 1328px;
    --max-width-benefits-card: 335px;

    --padding-header: 0 15px;

    --button-hover: #f1f1f1;


    --tree-background: #FFF;
    --tree-width: 300px;

    --border-opacity: 1;
    --text-opacity: 0.8;

    --header-height: 66px;
    --space-x-reverse: -0.38;

    --sub-header-height-responsive: 48px;

    --border-header-color: rgba(229,231,235,var(--border-opacity));
  }
`;

export default GlobalStyle;