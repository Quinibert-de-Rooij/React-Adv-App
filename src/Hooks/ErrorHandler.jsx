//App for now best practice, lets see if this can be used for some styling.
import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Button,
} from "@chakra-ui/react";

export const ErrorHandler = ({ error, resetErrorBoundary }) => {
  return (
    <Alert
      status="error"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="200px"
    >
      <AlertIcon />
      <AlertTitle>Something went wrong:</AlertTitle>
      <AlertDescription>{error.message}</AlertDescription>
      <Button colorScheme="red" onClick={resetErrorBoundary}>
        Reset Error
      </Button>
    </Alert>
  );
};
