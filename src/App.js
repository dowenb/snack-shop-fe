import { Heading, Box, Button, Text, Container, VStack } from '@chakra-ui/react'

function App() {
  return (
    <Container maxW='3xl' centerContent>
      <VStack spacing={6} align='stretch'>
        <Box maxW='64rem'>
          <Heading as='h1' size='3xl' noOfLines={1}>Project Snack Shop</Heading>
          <Text fontSize='x1'>
            A delicious place to practice building quality software.
          </Text>
        </Box>
        <Box maxW='64rem'>
          <Heading as='h2' size='2xl' noOfLines={1}>Special Offers</Heading>
          <Text fontSize='x1'>
            Never one to turn down a good offer to learn!
          </Text>
          <Button size='lg' colorScheme='green' mt='24px'>
            Start small, dream big!
          </Button>
        </Box>
      </VStack>
    </Container>
  );
}

export default App;
