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
  Textarea,
  Input,
  useDisclosure,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react';

interface SongDetails {
  song: string;
  artist: string;
  album: string;
}

export const NewReview: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [review, setReview] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  const [songDetails, setSongDetails] = useState<SongDetails>({ song: '', artist: '', album: '' });

  const handleReviewChange = (e: ChangeEvent<HTMLTextAreaElement>) => setReview(e.target.value);
  const handleRatingChange = (_: string, valueAsNumber: number) => setRating(valueAsNumber);
  const handleDetailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSongDetails({ ...songDetails, [e.target.name]: e.target.value });
  };

  const submitReview = () => {
    // Submit review logic
    console.log({ review, rating, songDetails });
    onClose();
  };

  return (
    <>
      <Button colorScheme="teal" variant="outline" onClick={onOpen}>✍️ Write a Review</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>✍️ Write a Review</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Song</FormLabel>
              <Input name="song" value={songDetails.song} onChange={handleDetailChange} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Artist</FormLabel>
              <Input name="artist" value={songDetails.artist} onChange={handleDetailChange} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Album</FormLabel>
              <Input name="album" value={songDetails.album} onChange={handleDetailChange} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Rating</FormLabel>
              <NumberInput max={10} min={0} value={rating} onChange={handleRatingChange}>
                <NumberInputField />
              </NumberInput>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Review</FormLabel>
              <Textarea value={review} onChange={handleReviewChange} placeholder="Write your review here..." />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={submitReview}>
              Post
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

