import React from "react";
import { Link } from "react-router-dom";
//this might suggest an error, however load the icons you need here.
import { UnorderedList, ListItem, Box } from "@chakra-ui/react";

export const NavigationMenu = ({ NavData }) => {
  return (
    <Box w="100px">
      <UnorderedList>
        <ListItem>
          <Link to={NavData.ToLink}>{NavData.EventName}</Link>
        </ListItem>
      </UnorderedList>
    </Box>
  );
};
