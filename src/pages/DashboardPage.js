import Navbar from "../components/Navbar";
import CardSession from "../components/CardSession";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";

function DashboardPage() {
  return (
    <>
      <Navbar />
      <Box p={4}>
        <Button
          variant={"solid"}
          colorScheme={"teal"}
          size={"sm"}
          mr={4}
          leftIcon={<AddIcon />}
        >
          Add new session
        </Button>
        <Flex
          p={50}
          w="full"
          alignItems="flex-start"
          justifyContent="space-evenly"
        >
          <VStack spacing="10px">
            <h2 className="track-title">Track 1</h2>
            <CardSession />
            <CardSession />
            <CardSession />
          </VStack>
          <VStack spacing="10px">
            <h2 className="track-title">Track 2</h2>
            <CardSession />
            <CardSession />
            <CardSession />
          </VStack>
          <VStack spacing="10px">
            <h2 className="track-title">Track 3</h2>
            <CardSession />
            <CardSession />
            <CardSession />
          </VStack>
        </Flex>
      </Box>
    </>
  );
}

export default DashboardPage;
