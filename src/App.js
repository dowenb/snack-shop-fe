import { Heading, Box, Text, VStack, HStack } from '@chakra-ui/react'
import { BulbIcon, NestIcon, WafflesIcon } from './components/Icons';

function Header() {
  return (
    <>
      <VStack grow={1} align='center' bg='blue.300' p='16'>
        <Heading as='h1' color='blue.900' size='4xl'>Project Snack Shop</Heading>
      </VStack>
      <Box grow={1} height={2} bg='black'></Box>
    </>
  )
}

function SpecialOffers() {
  return (
    <VStack grow={1} align='center' bg='orange.200' p='16'>
      <Heading as='h2' size='2xl'>Special Offers</Heading>
      <Text fontSize='lg' p='4'>
        Never one to turn down a good offer to learn!
      </Text>
      <HStack fontFamily='monospace' fontSize='20'>
        <VStack>
          <NestIcon boxSize='32' />
          <Text>Nest Offer!</Text>
        </VStack>
        <VStack>
          <BulbIcon boxSize='32' />
          <Text>Bulb Offer</Text>
        </VStack>
        <VStack>
          <WafflesIcon boxSize='32' />
          <Text>Waffles Offer</Text>
        </VStack>
      </HStack>
    </VStack>
  )
}

function App() {
  return (
    <>
      <Header />
      <SpecialOffers />
    </>
  );
}

export default App;
