//Somehow this is not in the description of the Project page,
//but makes sense to have, as Delete is an option.
import React, { useState } from "react";
import {
  Container,
  Center,
  useColorModeValue,
  FormControl,
  FormLabel,
  Select,
  Box,
  Stack,
  Heading,
  HStack,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { TextInput } from "../components/ui/TextInput";

export const AddEventForm = () => {
  //data to make sure we select the right user
  const { UserData } = useLoaderData();
  const navigateTo = useNavigate();

  let [selectedUser, setSelectState] = useState();
  const handleSelectInput = (user) => {
    setSelectState(user.target.value);
  };

  let [isTitle, setTitleState] = useState();
  const handleTitle = (title) => {
    setTitleState(title.target.value);
  };

  let [isDescription, setDescriptionState] = useState();
  const handleDescription = (desc) => {
    setDescriptionState(desc.target.value);
  };

  let [isURL, setURL] = useState();
  const handleURL = (desc) => {
    setURL(desc.target.value);
  };

  let [isLocation, setLocation] = useState();
  const handleLocation = (desc) => {
    setLocation(desc.target.value);
  };

  let [isStartDateTime, setStartDateTime] = useState();
  const handleStartDateTime = (desc) => {
    setStartDateTime(desc.target.value);
  };

  let [isEndDateTime, setEndDateTime] = useState();
  const handleEndDateTime = (desc) => {
    setEndDateTime(desc.target.value);
  };

  //For now this is sthe way of the checkbox,
  //Future reference: look into an automated way in case more events are added.
  const getCategoryIds = [];
  const [isSports, setCheckedSports] = useState(false);
  const handleCheckedSports = () => {
    setCheckedSports(!isSports);
  };
  if (isSports !== false) {
    getCategoryIds.push(1);
  }

  const [isGames, setCheckedGames] = useState(false);
  const handleCheckedGames = () => {
    setCheckedGames(!isGames);
  };
  if (isGames !== false) {
    getCategoryIds.push(2);
  }

  const [isRelaxation, setCheckedRelaxation] = useState(false);
  const handleCheckedRelaxation = () => {
    setCheckedRelaxation(!isGames);
  };
  if (isRelaxation != false) {
    getCategoryIds.push(3);
  }
  //For better readability:
  const getSelectedUser = selectedUser;
  const getTitle = isTitle;
  const getDescription = isDescription;
  const getURL = isURL;
  const getLocation = isLocation;
  const getStartTime = isStartDateTime;
  const getEndTime = isEndDateTime;

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEvent = {
      createdBy: getSelectedUser,
      title: getTitle,
      description: getDescription,
      image: getURL,
      categoryIds: getCategoryIds,
      location: getLocation,
      startTime: getStartTime,
      endTime: getEndTime,
    };

    fetch("http://localhost:3000/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEvent),
    })
      .then(() => {
        alert("Event is posted");
        navigateTo("/");
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to add event!");
      });
  };

  return (
    <Container
      maxW={"7xl"}
      backgroundColor={useColorModeValue("green.200", "green.900")}
      w={{ sm: "100%", md: "85%" }}
    >
      <form onSubmit={handleSubmit}>
        <Center spacing={{ base: 2, md: 5 }} py={{ base: 10, md: 19 }}>
          <Box w={{ sm: "80%", md: "60%" }} Value={selectedUser}>
            <Stack spacing={{ base: 6, md: 10 }}>
              <Heading>Add Event:</Heading>
              <FormControl isRequired>
                <FormLabel>User:</FormLabel>
                <Select
                  placeholder="Please Select"
                  onChange={handleSelectInput}
                >
                  {UserData.map((user) => (
                    <option value={user.id} key={user.id}>
                      {user.name}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Title:</FormLabel>
                <TextInput
                  value={isTitle}
                  placeholder="Event Title"
                  mb={8}
                  onChange={handleTitle}
                />
                <FormLabel>Description:</FormLabel>
                <TextInput
                  value={isDescription}
                  placeholder="Event Description"
                  mb={8}
                  onChange={handleDescription}
                />
                <FormLabel>Image URL:</FormLabel>
                <TextInput
                  value={isURL}
                  placeholder="URL to event immage"
                  mb={8}
                  onChange={handleURL}
                />
                <FormLabel>Location:</FormLabel>
                <TextInput
                  value={isLocation}
                  placeholder="Event Location"
                  mb={8}
                  onChange={handleLocation}
                />
                <FormLabel>Start Date/Time:</FormLabel>
                <TextInput
                  value={isStartDateTime}
                  placeholder="YYYY-MM-DD'T'HH:MM"
                  mb={8}
                  onChange={handleStartDateTime}
                />
                <FormLabel>End Date/Time:</FormLabel>
                <TextInput
                  value={isEndDateTime}
                  placeholder="YYYY-MM-DD'T'HH:MM"
                  mb={8}
                  onChange={handleEndDateTime}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Categories:</FormLabel>
                <HStack>
                  <Checkbox
                    label="sports"
                    isChecked={isSports}
                    onChange={handleCheckedSports}
                    colorScheme="red"
                  >
                    Sports
                  </Checkbox>
                  <Checkbox
                    label="games"
                    isChecked={isGames}
                    onChange={handleCheckedGames}
                    colorScheme="yellow"
                  >
                    Games
                  </Checkbox>
                  <Checkbox
                    label="relaxation"
                    isChecked={isRelaxation}
                    onChange={handleCheckedRelaxation}
                    colorScheme="green"
                  >
                    Relaxation
                  </Checkbox>
                </HStack>
              </FormControl>
              <Button
                type="submit"
                w="150px"
                rounded={"md"}
                size={"lg"}
                //             onClick={() => clickRc()}
                bg={useColorModeValue("orange.500", "orange.50")}
                color={useColorModeValue("white", "gray.900")}
                textTransform={"uppercase"}
                _hover={{
                  transform: "translateY(2px)",
                  boxShadow: "lg",
                }}
              >
                Submit
              </Button>
            </Stack>
          </Box>
          /
        </Center>
      </form>
    </Container>
  );
};
