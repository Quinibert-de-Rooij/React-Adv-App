/*import {
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
    Wrap,
  } from "@chakra-ui/react";
  import { HealthTag } from "./ui/HealthTag";
  import { healthFilter } from "../utils/RecipeHelper";
  import { CautionTag } from "./ui/CautionTag";
  import { DietTag } from "./ui/DietTag";
  //note to self ˆ+z sometimes goes back to missing the curly brackets. Be sure to have ({})
  
  export const RecipeCard = ({ eventItem, eventCategory }) => {
    //Items we want from the recipebook on the overview cards:
    //const { image, label, cautions } = recipeItems;
    const checkHealthlabels = ["Vegan", "Vegetarian"];
    const healthTags = healthFilter(recipeItem.healthLabels, checkHealthlabels);
  
    return (
      <Card
        maxW="305px"
        onClick={() => clickRc(recipeItem)}
        cursor="pointer"
        _hover={{ transform: "scale(1.02)" }}
      >
        <CardBody>
          <Image
            boxSize={"300px"}
            src={recipeItem.image}
            alt="Recipe Image"
            borderRadius="lg"
          />
          <Stack spacing="1">
            <Heading size="md" color="blue.600">
              {recipeItem.label}
            </Heading>
            <Center flexDirection="column">
              <Text color={"GrayText"} as="b">
                {recipeItem.mealType}
              </Text>
              <Text color="blue.600">Type: {recipeItem.dishType}</Text>
              <HStack spacing="1">
                {healthTags.map((HTName) => (
                  <HealthTag tagName={HTName} key={HTName} />
                ))}
              </HStack>
            </Center>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <Wrap>
            {recipeItem.dietLabels.map((diet) => (
              <DietTag tagName={diet} key={diet} />
            ))}
            {recipeItem.cautions.map((caution) => (
              <CautionTag tagName={caution} key={caution} />
            ))}
          </Wrap>
        </CardFooter>
      </Card>
    );
  };
  */
