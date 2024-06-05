import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  HStack,
  Text,
  Divider,
  Center,
} from "@chakra-ui/react";
//import { HealthTag } from "./ui/HealthTag"; need new tags
//import { healthFilter } from "../utils/RecipeHelper"; need new filter

//note to self ˆ+z sometimes goes back to missing the curly brackets. Be sure to have ({})

export const EventCard = ({ eventItem }) => {
  //Items we want from the recipebook on the overview cards:
  //const { image, label, cautions } = recipeItems;
  //const healthTags = healthFilter(eventItem.healthLabels, checkHealthlabels);

  return (
    <Card
      maxW="305px"
      //      onClick={() => clickRc(recipeItem)} turn on when ready
      cursor="pointer"
      _hover={{ transform: "scale(1.02)" }}
    >
      <CardBody>
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
            <Text color="blue.600">StartTime: {eventItem.startTime}</Text>
            <HStack spacing="1">
              <Text>1</Text>
              <Text>2</Text>
            </HStack>
          </Center>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Text>footer</Text>
      </CardFooter>
    </Card>
  );
};
