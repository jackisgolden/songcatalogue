import React, { useState, ChangeEvent, useContext } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
  useDisclosure,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import axios from 'axios'; // Import axios for making HTTP requests

// You might want to create a context or store to manage user authentication and store the user ID
// This is just a placeholder for the user ID.
const UserContext = React.createContext<{ userId: string | null }>({ userId: null });

interface PlaylistDetails {
  name: string;
  description: string;
}

export const MakePlaylist: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [playlistDetails, setPlaylistDetails] = useState<PlaylistDetails>({ name: '', description: '' });
  const { userId } = useContext(UserContext); // Get the user ID from your context or state

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPlaylistDetails({ ...playlistDetails, [e.target.name]: e.target.value });
  };

  const submitPlaylist = () => {
    if (userId) {
      // Send a POST request to create a playlist with the user ID
      axios.post('/api/playlists', { userId, ...playlistDetails })
        .then(response => {
          if (response.data.success) {
            // Handle successful playlist creation
            console.log(`Playlist created with ID: ${response.data.playlistId}`);
            onClose();
          } else {
            // Handle playlist creation failure
            console.error('Playlist creation failed');
          }
        })
        .catch(error => {
          // Handle API request errors
          console.error('API request failed', error);
        });
    } else {
      // Handle the case where the user is not authenticated
      console.error('User is not authenticated');
    }
  };

  return (
    <>
      <Button colorScheme="teal" variant="outline" onClick={onOpen}>🎵  New Playlist</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>🎵 New Playlist</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input name="name" value={playlistDetails.name} onChange={handleChange} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea name="description" value={playlistDetails.description} onChange={handleChange} placeholder="Describe your playlist..." />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={submitPlaylist}>
              Create
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
