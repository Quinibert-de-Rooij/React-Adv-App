//App for now best practice, lets see if this can be used for some styling.
import {
  HStack,
  Heading,
  Center,
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
    <Center flexDirection="column">
      <Box h={16}></Box>
      <Box flex="1" w="300px">
        <Alert
          status="error"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="200px"
          borderRadius="lg"
        >
          <HStack>
            <AlertIcon />
            <Heading>ERROR</Heading>
            <AlertIcon />
          </HStack>
          <AlertTitle>Something went wrong:</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
          <Box h={4}></Box>
          <Button colorScheme="red" onClick={handleRetry}>
            Retry
          </Button>
        </Alert>
      </Box>
    </Center>
  );
};
