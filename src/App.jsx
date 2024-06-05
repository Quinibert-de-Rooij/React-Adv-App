//App for now best practice, lets see if this can be used for some styling.
import React from "react";
import { Router } from "./Router";
//Installed react-error-boundary to make error handling easier.
//The installed
import { ErrorBoundary } from "react-error-boundary";
import { ErrorHandler } from "./Hooks/ErrorHandler";

export const App = () => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorHandler}
      onReset={() => {
        // reset the state, so the error doesn't happen again after reset
      }}
    >
      <Router />
    </ErrorBoundary>
  );
};
