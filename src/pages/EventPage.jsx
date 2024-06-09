import React from "react";
import {
  Box,
  Container,
  Stack,
  HStack,
  Text,
  Image,
  Flex,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  useDisclosure,
  Avatar,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { useLoaderData, useParams, useNavigate, Link } from "react-router-dom";
import { DeleteButton } from "../components/ui/DeleteButton";

import { TimeTag } from "../components/ui/TimeTag";
import { CategoryTag } from "../components/ui/CategoryTag";
import { EditEventForm } from "../components/ui/EditEventForm";

export const EventPage = () => {
  const { EventData, UserData } = useLoaderData();
  const { eventId } = useParams();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const Event = EventData.find((Event) => Event.id == parseInt(eventId));

  const User = UserData.find((User) => User.id == parseInt(Event.createdBy));

  const handleDeleteEvent = () => {
    fetch(`http://localhost:3000/events/${eventId}`, {
      method: "DELETE",
    })
      .then(() => {
        navigate("/");
        alert("Event is deleted!");
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to delete event!");
      });
  };

  const onDeleteConfirm = () => {
    handleDeleteEvent();
  };

  return (
    <Container
      maxW={"7xl"}
      backgroundColor={useColorModeValue("green.200", "green.900")}
      w={{ sm: "100%", md: "85%" }}
    >
      {" "}
      <Stack
        direction={"column"}
        divider={<StackDivider borderColor={"gray.600"} />}
      >
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 1, md: 2 }}
          py={{ base: 5, md: 10 }}
        >
          <Flex>
            <Image
              rounded={"3xl"}
              alt={"Event Picture"}
              src={Event.image}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={{ base: "100%", sm: "400px", lg: "500px" }}
            />
          </Flex>

          <Stack spacing={{ base: 6, md: 10 }}>
            {isOpen ? null : (
              <Box as={"header"}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
                  textTransform={"uppercase"}
                >
                  {Event.title}
                </Heading>
                <Text
                  color={"gray.500"}
                  fontWeight={300}
                  fontSize={"4xl"}
                  textTransform={"uppercase"}
                >
                  {Event.location}
                </Text>
                <VStack>
                  <TimeTag tagName={Event.startTime} />
                  <TimeTag tagName={Event.endTime} />
                </VStack>
              </Box>
            )}

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={<StackDivider borderColor={"gray.600"} />}
            >
              {isOpen ? (
                <EditEventForm CurrentEvent={Event} />
              ) : (
                <Stack spacing={{ base: 4, sm: 6 }}>
                  <Text
                    color={useColorModeValue("gray.500", "gray.400")}
                    fontSize={"2xl"}
                    fontWeight={"300"}
                  >
                    {Event.description}
                  </Text>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
                    <Box>
                      <Text
                        fontSize={{ base: "16px", lg: "18px" }}
                        color={"yellow.500"}
                        fontWeight={"500"}
                        textTransform={"uppercase"}
                        mb={"4"}
                      >
                        Created By:
                      </Text>
                      <HStack>
                        <Avatar
                          src={User.image}
                          size="lg"
                          name="Category Icon"
                        />
                        <Text>{User.name}</Text>
                      </HStack>
                    </Box>
                    <Box>
                      <VStack>
                        {Event.categoryIds.map((categoryId) => (
                          <CategoryTag tagID={categoryId} key={categoryId} />
                        ))}
                      </VStack>
                    </Box>
                  </SimpleGrid>
                </Stack>
              )}
              <Box>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent={"center"}
                >
                  <Icon
                    boxSize={8}
                    as={isOpen ? ChevronUpIcon : ChevronDownIcon}
                  />
                  <Button
                    rounded={"md"}
                    size={"lg"}
                    onClick={isOpen ? onClose : onOpen}
                    bg={
                      isOpen
                        ? useColorModeValue("gray.500", "gray.50")
                        : useColorModeValue("green.500", "green.50")
                    }
                    color={useColorModeValue("white", "gray.900")}
                    textTransform={"uppercase"}
                    _hover={{
                      transform: "translateY(2px)",
                      boxShadow: "lg",
                    }}
                  >
                    {isOpen ? "Cancel" : "Edit"}
                  </Button>
                  {isOpen ? <DeleteButton onDelete={onDeleteConfirm} /> : null}
                  <Link to={"/"}>
                    <Button
                      rounded={"md"}
                      size={"lg"}
                      bg={useColorModeValue("blue.500", "blue.50")}
                      color={useColorModeValue("white", "gray.900")}
                      textTransform={"uppercase"}
                      _hover={{
                        transform: "translateY(2px)",
                        boxShadow: "lg",
                      }}
                    >
                      Back
                    </Button>
                  </Link>
                </Stack>
              </Box>
            </Stack>
          </Stack>
        </SimpleGrid>

        <Stack direction="row" alignItems="center" justifyContent={"center"}>
          <Text fontSize={"sm"} color={"grey"}>
            Events by: Quinibert de Rooij.
          </Text>
        </Stack>
      </Stack>
    </Container>
  );
};
