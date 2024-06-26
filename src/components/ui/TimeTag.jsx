import { Tag, Avatar, TagLabel } from "@chakra-ui/react";

export const TimeTag = ({ tagName }) => {
  return (
    <Tag size="md" colorScheme="gray" borderRadius="full">
      <Avatar
        src="https://img.icons8.com/bubbles/100/time-machine.png"
        size="md"
        name="Time Icon"
      />
      <TagLabel color="gray.500" as="b" fontSize={"xl"}>
        {tagName}
      </TagLabel>
    </Tag>
  );
};
