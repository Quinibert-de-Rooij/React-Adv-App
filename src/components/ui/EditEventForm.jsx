//Somehow this is not in the description of the Project page,
//but makes sense to have, as Delete is an option.
import React, { useState } from "react";
import {
  Heading,
  Center,
  useColorModeValue,
  FormControl,
  FormLabel,
  Select,
  Box,
  Stack,
  HStack,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import { TextInput } from "./TextInput";

export const EditEventForm = ({ CurrentEvent }) => {
  //data to make sure we select the right user
  const { UserData } = useLoaderData();
  const { eventId } = useParams();
  const navigateTo = useNavigate();

  let [selectedUser, setSelectState] = useState(CurrentEvent.createdBy);
  const handleSelectInput = (user) => {
    setSelectState(user.target.value);
  };

  let [isTitle, setTitleState] = useState(CurrentEvent.title);
  const handleTitle = (title) => {
    setTitleState(title.target.value);
  };

  let [isDescription, setDescriptionState] = useState(CurrentEvent.description);
  const handleDescription = (desc) => {
    setDescriptionState(desc.target.value);
  };

  let [isURL, setURL] = useState(CurrentEvent.image);
  const handleURL = (URL) => {
    setURL(URL.target.value);
  };

  let [isLocation, setLocation] = useState(CurrentEvent.location);
  const handleLocation = (location) => {
    setLocation(location.target.value);
  };

  let [isStartDateTime, setStartDateTime] = useState(CurrentEvent.startTime);
  const handleStartDateTime = (startDateTime) => {
    setStartDateTime(startDateTime.target.value);
  };

  let [isEndDateTime, setEndDateTime] = useState(CurrentEvent.endTime);
  const handleEndDateTime = (endDateTime) => {
    setEndDateTime(endDateTime.target.value);
  };

  //For now this is sthe way of the checkbox,
  //Future reference: look into an automated way in case more events are added.
  const getCategoryIds = [];

  //extra code needed to set the checkboxes:
  const setSport = () => {
    if (CurrentEvent.categoryIds.includes(1)) {
      return true;
    } else {
      return false;
    }
  };
  const [isSports, setCheckedSports] = useState(setSport);
  const handleCheckedSports = () => {
    setCheckedSports(!isSports);
  };
  if (isSports !== false) {
    getCategoryIds.push(1);
  }

  //extra code needed to set the checkboxes:
  const setGame = () => {
    if (CurrentEvent.categoryIds.includes(2)) {
      return true;
    } else {
      return false;
    }
  };
  const [isGames, setCheckedGames] = useState(setGame);
  const handleCheckedGames = () => {
    setCheckedGames(!isGames);
  };
  if (isGames !== false) {
    getCategoryIds.push(2);
  }

  const setRelaxation = () => {
    if (CurrentEvent.categoryIds.includes(3)) {
      return true;
    } else {
      return false;
    }
  };
  const [isRelaxation, setCheckedRelaxation] = useState(setRelaxation);
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
    fetch(`http://localhost:3000/events/${eventId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEvent),
    })
      .then(() => {
        alert("Event is updated.");
        navigateTo(`/event/${eventId}`);
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to edit event!");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Center spacing={{ base: 2, md: 5 }} py={{ base: 10, md: 19 }}>
        <Box w="90%" Value={selectedUser}>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Heading align="center" size="lg">
              Edit:
            </Heading>
            <FormControl isRequired>
              <FormLabel>User:</FormLabel>
              <Select onChange={handleSelectInput}>
                {UserData.map((user) => (
                  <option value={user.id} key={user.id}>
                    {user.name}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Title:</FormLabel>
              <TextInput value={isTitle} mb={8} onChange={handleTitle} />
              <FormLabel>Description:</FormLabel>
              <TextInput
                value={isDescription}
                mb={8}
                onChange={handleDescription}
              />
              <FormLabel>Image URL:</FormLabel>
              <TextInput value={isURL} mb={8} onChange={handleURL} />
              <FormLabel>Location:</FormLabel>
              <TextInput value={isLocation} mb={8} onChange={handleLocation} />
              <FormLabel>Start Date/Time:</FormLabel>
              <TextInput
                value={isStartDateTime}
                mb={8}
                onChange={handleStartDateTime}
              />
              <FormLabel>End Date/Time:</FormLabel>
              <TextInput
                value={isEndDateTime}
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
  );
};
