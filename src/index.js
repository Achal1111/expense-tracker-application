import ReactDOM from "react-dom";
import React from "react";
import { SpeechProvider } from "@speechly/react-client";
import App from "./App";
import { Provider } from "./context/context";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <SpeechProvider appId="e6ac27fb-5881-41ff-a766-c27c6daf85da" language="en-US">
    <Provider>
      <div>hoiooo</div>
      <App />
    </Provider>
  </SpeechProvider>,
  rootElement
);
