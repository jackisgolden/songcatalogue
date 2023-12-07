import React, { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  Input,
  useDisclosure,
} from '@chakra-ui/react';

export const Search: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value);

  const handleSearch = () => {
    navigate(`/search/?query=${encodeURIComponent(searchTerm)}`);
    onClose();
  };

  return (
    <>
      <Button colorScheme="blue" onClick={onOpen}>🔍 Search</Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Search</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input 
              placeholder="Type to search..." 
              value={searchTerm} 
              onChange={handleSearchChange} 
            />
          </ModalBody>
          <Button colorScheme="blue" onClick={handleSearch}>
            Go
          </Button>
        </ModalContent>
      </Modal>
    </>
  );
};
