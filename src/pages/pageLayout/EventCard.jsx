import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
  Divider,
  Center,
  Wrap,
  useColorModeValue,
} from "@chakra-ui/react";
import { CategoryTag } from "../../components/ui/CategoryTag";

//import { HealthTag } from "./ui/HealthTag"; need new tags
//import { healthFilter } from "../utils/RecipeHelper"; need new filter

//note to self ˆ+z sometimes goes back to missing the curly brackets. Be sure to have ({})

export const EventCard = ({ eventItem }) => {
  const DateTime = (RawDateTime) => {
    return (
      RawDateTime.substring(0, 10) + " at: " + RawDateTime.substring(11, 16)
    );
  };

  return (
    <Card
      maxW="305px"
      cursor="pointer"
      _hover={{ transform: "scale(1.02)" }}
      backgroundColor={useColorModeValue("green.200", "green.900")}
    >
      <CardBody flexDirection="column">
        <Image
          boxSize={"300px"}
          src={eventItem.image}
          alt="Recipe Image"
          borderRadius="lg"
        />
        <Stack spacing="1">
          <Heading size="md" color="blue.600">
            {eventItem.title}
          </Heading>
          <Center flexDirection="column">
            <Text color={"GrayText"} as="b">
              {eventItem.description}
            </Text>
            <Text color="blue.600">Start: {DateTime(eventItem.startTime)}</Text>
            <Text color="blue.600">End: {DateTime(eventItem.endTime)}</Text>
          </Center>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Wrap>
          {eventItem.categoryIds.map((categoryId) => (
            <CategoryTag tagID={categoryId} key={categoryId} />
          ))}
        </Wrap>
      </CardFooter>
    </Card>
  );
};
