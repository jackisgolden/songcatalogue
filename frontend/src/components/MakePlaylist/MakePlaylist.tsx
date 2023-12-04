import React, { useState, ChangeEvent } from 'react';
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

interface PlaylistDetails {
  name: string;
  description: string;
}

export const MakePlaylist: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [playlistDetails, setPlaylistDetails] = useState<PlaylistDetails>({ name: '', description: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPlaylistDetails({ ...playlistDetails, [e.target.name]: e.target.value });
  };

  const submitPlaylist = () => {
    // Submit playlist logic
    console.log(playlistDetails);
    onClose();
  };

  return (
    <>
      <Button colorScheme="blue" onClick={onOpen}>Create New Playlist</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a New Playlist</ModalHeader>
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

