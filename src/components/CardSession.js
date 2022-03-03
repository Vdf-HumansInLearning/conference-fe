import React from "react";
import {
  Flex,
  Box,
  Badge,
  useColorModeValue,
  Avatar,
  CloseButton,
} from "@chakra-ui/react";

const data = {
  isNew: true,
  imageURL:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  name: "React Hooks",
  hour: "09:00-10:00",
  numParticipants: 34,
  sessionType: "workshop",
};

function CardSession() {
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      minW="md"
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative"
    >
      <Box p="6">
        <Flex justifyContent="flex-end">
          <CloseButton />
        </Flex>
        <Box d="flex" alignItems="baseline">
          <Badge rounded="full" fontSize="0.8em" colorScheme="orange">
            {data.sessionType}
          </Badge>
        </Box>
        <Flex justifyContent="space-between" alignContent="center">
          <Box fontSize="xl" color={useColorModeValue("gray.800", "white")}>
            {data.hour}
          </Box>
        </Flex>

        <Flex mt="1" justifyContent="space-between" alignContent="center">
          <Box
            fontSize="2xl"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {data.name}
          </Box>
        </Flex>
        <Flex mt="1" justifyContent="space-between" alignContent="center">
          <Box
            fontSize="lg"
            as="h4"
            lineHeight="tight"
            isTruncated
            paddingTop="15px"
          >
            {data.numParticipants} participants
          </Box>
          <Avatar
            size={"md"}
            src={
              "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
            }
          />
        </Flex>
      </Box>
    </Box>
  );
}

export default CardSession;
