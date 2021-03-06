import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Menu,
  MenuButton,
  Button,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <HStack spacing={8} alignItems={"center"}>
          <Box>
            <Image boxSize="110px" src="logo.svg" alt="logo" />
          </Box>
        </HStack>
        <Flex alignItems={"center"}>
          <Link to="/login">
            <Button variant={"solid"} colorScheme={"teal"} size={"sm"} mr={4}>
              Logout
            </Button>
          </Link>
          <Menu>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
            >
              <Avatar
                size={"sm"}
                src={
                  "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                }
              />
            </MenuButton>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
}
