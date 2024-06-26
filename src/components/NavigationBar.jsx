import { NavigationMenu } from "./NavigationMenu";
//Note: In order for this event icon and color to work, please refer to https://v2.chakra-ui.com/docs/components/icon/usage
//In addition also load the related icons.
import { NavigationData } from "../Data/NavigationData";
import {
  Box,
  Flex,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  IconButton,
  HStack,
  Heading,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

export const NavigationBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      flex="1"
      bg={useColorModeValue("gray.100", "gray.900")}
      w={{ sm: "100%", md: "90%" }}
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <Box>
            <Heading size="xl">Planner BV</Heading>
          </Box>
          <HStack as={"nav"} display={{ base: "none", md: "flex" }}>
            {NavigationData.Navigation.map((NavData) => (
              <NavigationMenu key={NavData.id} NavData={NavData} />
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Stack>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {NavigationData.Navigation.map((NavData) => (
              <NavigationMenu key={NavData.id} NavData={NavData} />
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};
