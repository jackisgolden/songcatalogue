import React, { useState, useEffect } from 'react';
import {
  Input,
  VStack,
  Box,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';

// Define a type for search results
type SearchResult = {
  name: string;
  // Add other properties as needed
};

export const SearchBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]); // Define the type here
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchTerm) {
      // Make your API call here to fetch search results
      // You can replace this with your actual API endpoint and logic
      setLoading(true);
      fetch(`YOUR_API_ENDPOINT?q=${searchTerm}`)
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data); // Update search results with API response
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    } else {
      setSearchResults([]); // Clear search results when search term is empty
    }
  }, [searchTerm]);

  return (
    <>
      <Input
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent
          bg="rgba(0, 0, 0, 0.5)" // Semi-transparent background to blur the content
          borderRadius="none"
          border="none"
          p={0} // No padding
          boxShadow="none"
        >
          <ModalHeader>
            <Input
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody p={0}>
            <VStack spacing={4} align="stretch">
              {loading ? (
                <Text>Loading...</Text>
              ) : (
                searchResults.map((result, index) => (
                  <Box key={index} p={3} shadow="md" borderWidth="1px">
                    <Text>{result.name}</Text>
                  </Box>
                ))
              )}
            </VStack>
          </ModalBody>
          <ModalFooter>
            {/* Optional: Add buttons or other footer content */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

