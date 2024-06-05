//App for now best practice, lets see if this can be used for some styling.
import React from "react";
import { Router } from "./Router";
//Installed react-error-boundary to make error handling easier.
//The installed
import { ErrorBoundary } from "react-error-boundary";
import { ErrorHandler } from "./ErrorHandlers/ErrorHandler";
import { Box } from "@chakra-ui/react";

export const App = () => {
  return (
    <Box flex="1" display="flex" minWidth="300px">
      <ErrorBoundary
        FallbackComponent={ErrorHandler}
        onReset={() => {
          window.location.reload();
        }}
      >
        <Router />
      </ErrorBoundary>
    </Box>
  );
};
