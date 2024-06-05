//App for now best practice, lets see if this can be used for some styling.
import {
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Button,
} from "@chakra-ui/react";

export const AsyncErrorHandler = ({ error }) => {
  const handleRetry = () => {
    window.location.reload();
  };
  return (
    <Box flex="1">
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
        <AlertDescription>{error}</AlertDescription>
        <Button colorScheme="red" onClick={handleRetry}>
          Retry
        </Button>
      </Alert>
    </Box>
  );
};
