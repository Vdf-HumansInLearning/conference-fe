import Navbar from "../components/Navbar";
import CardSession from "../components/CardSession";
import { Box, Button, SimpleGrid, VStack } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

function DashboardPage() {
  return (
    <>
      <Navbar />
      <Box p={4}>
        <Button
          variant={"solid"}
          colorScheme={"teal"}
          size={"md"}
          mr={4}
          leftIcon={<AddIcon />}
        >
          Add new session
        </Button>

        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3 }}
          minChildWidth="300px"
          spacing="30px"
          mt={4}
        >
          <VStack>
            <h2 className="track-title">Track 1</h2>
            <CardSession />
            <CardSession />
            <CardSession />
          </VStack>
          <VStack>
            <h2 className="track-title">Track 2</h2>
            <CardSession />
            <CardSession />
            <CardSession />
          </VStack>
          <VStack>
            <h2 className="track-title">Track 3</h2>
            <CardSession />
            <CardSession />
            <CardSession />
          </VStack>
          <VStack>
            <h2 className="track-title">Track 4</h2>
            <CardSession />
            <CardSession />
            <CardSession />
          </VStack>
          <VStack>
            <h2 className="track-title">Track 5</h2>
            <CardSession />
            <CardSession />
            <CardSession />
          </VStack>
          <VStack>
            <h2 className="track-title">Track 6</h2>
            <CardSession />
            <CardSession />
            <CardSession />
          </VStack>
        </SimpleGrid>
      </Box>
    </>
  );
}

export default DashboardPage;
