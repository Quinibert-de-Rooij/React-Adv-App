import React from "react";
import { Outlet } from "react-router-dom";
//Note: In order for this event icon and color to work, please refer to https://v2.chakra-ui.com/docs/components/icon/usage
//In addition also load the related icons.
import { Center } from "@chakra-ui/react";
import { NavigationBar } from "./NavigationBar";

export const Root = () => {
  return (
    <Center flexDirection="column">
      <NavigationBar />
      <Outlet />
    </Center>
  );
};
