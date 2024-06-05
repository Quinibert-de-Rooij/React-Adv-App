import { ChakraProvider } from "@chakra-ui/react";
//Installed react-error-boundary to make error handling easier.
//The installed
import { ErrorBoundary } from "react-error-boundary";
import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorHandler } from "./Hooks/ErrorHandler";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
