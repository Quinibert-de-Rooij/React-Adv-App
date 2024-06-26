import React, { useState } from "react";
//This looks promising, however doesn't give the right results.
//Has to be retried with a later version.
//import { ErrorBoundary, useErrorBoundary } from "react-error-boundary";
import {
  SimpleGrid,
  Box,
  Stack,
  Radio,
  RadioGroup,
  Center,
} from "@chakra-ui/react";
import { EventCard } from "./pageLayout/EventCard";
import { AsyncErrorHandler } from "../ErrorHandlers/AsyncErrorHandler";
import { useLoaderData, Link } from "react-router-dom";
import { TextInput } from "../components/ui/TextInput";

export const EventsPage = () => {
  const { CategoryData, EventData, ErrorMessage } = useLoaderData();
  let [radioState, setRadioState] = useState(0);
  let [searchField, setSearchField] = useState("");

  //first we use the main filter search:
  const handleRadioInput = (event) => {
    setRadioState(event.target.value);
  };

  let categoryFilter = () => {
    if (radioState == "0") {
      return EventData;
    } else {
      let filteredList = EventData.filter((Event) =>
        Event.categoryIds.includes(parseInt(radioState))
      );
      return filteredList;
    }
  };

  //second the filter resultsfrom the key input:
  const handleChange = (KeyPress) => {
    setSearchField(KeyPress.target.value);
  };

  let matchedEvents = categoryFilter().filter((Event) => {
    return Event.title.toLowerCase().includes(searchField.toLowerCase());
  });

  //Note: Tried to use the error handled on Router level, however:
  //returning this results in a conflict with data usage with the Dom.
  //Quinns homebrew error handler:
  if (ErrorMessage !== "") {
    return <AsyncErrorHandler error={ErrorMessage} />;
  }
  return (
    <Box>
      <Center flexDirection="column">
        <TextInput
          placeholder="Event Title"
          onChange={handleChange}
          w={{ sm: 200, md: 300, lg: 350, xl: 400 }}
          mb={8}
        />
        <RadioGroup defaultValue="0" h="35px">
          <Stack
            spacing={{ sm: 3, md: 5 }}
            direction={{ sm: "column", md: "row" }}
          >
            <Radio colorScheme="blue" value="0" onChange={handleRadioInput}>
              All
            </Radio>
            {CategoryData.map((category) => (
              <Radio
                colorScheme="orange"
                value={category.id.toString()}
                key={category.id}
                onChange={handleRadioInput}
              >
                {category.name}
              </Radio>
            ))}
          </Stack>
        </RadioGroup>
      </Center>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={2}>
        {matchedEvents.map((event) => (
          <Link to={`event/${event.id}`} key={event.id}>
            <EventCard key={event.id} eventItem={event} />
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
};
