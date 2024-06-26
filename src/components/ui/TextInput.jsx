import { Input } from "@chakra-ui/react";

export const TextInput = ({ onChange, ...props }) => (
  <Input
    variant="flushed"
    color="green.500"
    size={{ sm: "sm", md: "md", lg: "lg" }}
    onChange={onChange}
    {...props}
  />
);
