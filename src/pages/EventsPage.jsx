import React from "react";
import { Text } from "@chakra-ui/react";
import { getEventData } from "../Data/DataHandler";

export const EventsPage = () => {
  const EventData = getEventData();
  return <Text>{EventData}</Text>;
};
