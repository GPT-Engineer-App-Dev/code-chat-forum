import { useState } from 'react';
import { Box, Container, Flex, HStack, Link, Text, VStack, Spacer, Heading, SimpleGrid, Input, Button, FormControl, FormLabel, FormHelperText } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  const [postData, setPostData] = useState({
    title: '',
    content: '',
  });

  const handleTitleChange = (e) => {
    setPostData({ ...postData, title: e.target.value });
  };

  const handleContentChange = (e) => {
    setPostData({ ...postData, content: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!postData.title || !postData.content) {
      // Implement form validation logic here
      return;
    }
    // Logic to submit the post data (redirect logic can be added here)
    console.log('Post submitted successfully');
  };

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

      {/* Post Creation Form */}
      <Box p={8}>
        <Heading as="h2" size="lg" mb={4}>Create New Post</Heading>
        <FormControl id="title" isRequired>
          <FormLabel>Title</FormLabel>
          <Input value={postData.title} onChange={handleTitleChange} />
          <FormHelperText>Title is required</FormHelperText>
        </FormControl>
        <FormControl id="content" isRequired>
          <FormLabel>Content</FormLabel>
          <Input value={postData.content} onChange={handleContentChange} />
          <FormHelperText>Content is required</FormHelperText>
        </FormControl>
        <Button type="submit" mt={4} onClick={handleSubmit}>Create Post</Button>
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