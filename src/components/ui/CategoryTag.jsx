import { Tag, Avatar, TagLabel } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

export const CategoryTag = ({ tagID }) => {
  const { CategoryData } = useLoaderData();
  const CategoryTag = CategoryData.find(
    (Category) => Category.id === parseInt(tagID)
  );
  return (
    <Tag size="sm" colorScheme="gray" borderRadius="full">
      <Avatar
        src="https://img.icons8.com/dusk/64/diversity.png"
        size="sm"
        name="Category Icon"
      />
      <TagLabel color="gray.500" as="b" fontSize={"lg"}>
        {CategoryTag.name}
      </TagLabel>
    </Tag>
  );
};
