import "./App.css";
import { Button, ButtonGroup, Stack } from "@chakra-ui/react";
import { EmailIcon, ArrowForwardIcon, WarningIcon } from "@chakra-ui/icons";

function App() {
  return (
    <div className="App">
      <Button colorScheme="blue">Button</Button>
      <Stack direction="row" spacing={4}>
        <Button leftIcon={<EmailIcon />} colorScheme="teal" variant="solid">
          Email
        </Button>
        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme="teal"
          variant="outline"
        >
          Call us
        </Button>
      </Stack>
    </div>
  );
}

export default App;
