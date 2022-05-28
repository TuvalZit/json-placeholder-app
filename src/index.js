import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "theme-ui";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import theme from "./common/theme";
import store from "./Redux/store";
import { Provider } from "react-redux";
import { Global } from "@emotion/react";
ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <Global
          styles={() => ({
            body: {
              overflowY: "visible !important",
              margin: 0,
              fontFamily: "'Work Sans', sans-serif",
              fontFeatureSettings: "'lnum'",
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
              height: "100%",
            },
          })}
        ></Global>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
