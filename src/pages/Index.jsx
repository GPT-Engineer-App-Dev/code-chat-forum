import { Box, Container, Flex, HStack, Link, Text, VStack, Spacer, Heading, SimpleGrid } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="teal.500" color="white" p={4} align="center">
        <HStack spacing={8}>
          <Link href="#" fontSize="xl" fontWeight="bold">Home</Link>
          <Link href="#">Categories</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
        </HStack>
        <Spacer />
      </Flex>

      {/* Main Section */}
      <Box as="main" p={8}>
        <Heading as="h1" size="xl" mb={6} textAlign="center">Discussion Categories</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Technology</Heading>
            <Text mt={4}>Discuss the latest in tech, gadgets, and software.</Text>
            <Link href="#" color="teal.500" mt={2} display="block">View Discussions</Link>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Health</Heading>
            <Text mt={4}>Share and learn about health tips and news.</Text>
            <Link href="#" color="teal.500" mt={2} display="block">View Discussions</Link>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Travel</Heading>
            <Text mt={4}>Explore travel destinations and tips.</Text>
            <Link href="#" color="teal.500" mt={2} display="block">View Discussions</Link>
          </Box>
          {/* Add more categories as needed */}
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="teal.500" color="white" p={4} mt={8}>
        <Flex align="center" justify="space-between">
          <Text>&copy; 2023 Your Company. All rights reserved.</Text>
          <HStack spacing={4}>
            <Link href="#"><FaFacebook /></Link>
            <Link href="#"><FaTwitter /></Link>
            <Link href="#"><FaInstagram /></Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;