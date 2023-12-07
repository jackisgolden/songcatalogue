import { useEffect, useState } from 'react';
import { Box, VStack, Text, Avatar, HStack } from '@chakra-ui/react';

interface Review {
  id: number;
  author: string;
  content: string;
  date: string;
  rating: number;
  artist?: string;
  album?: string;
  song?: string;
}

export const Feed = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  const mockReviews: Review[] = [
    {
      id: 1,
      author: 'User 1',
      content: 'This is a mock review #1',
      date: '2023-01-01',
      rating: 7,
      artist: 'Artist 1',
      album: 'Album 1',
      song: 'Song 1',
    },
    {
      id: 2,
      author: 'User 2',
      content: 'Mock review #2 is here!',
      date: '2023-01-02',
      rating: 3,
      artist: 'Artist 2',
      album: 'Album 2',
      song: 'Song 2',
    },
    {
      id: 3,
      author: 'User 3',
      content: 'Feeling inspired with mock review #3',
      date: '2023-01-03',
      rating: 9,
      artist: 'Artist 3',
    },
  ];

  useEffect(() => {
    setReviews(mockReviews);
  }, []);

  const mapRatingStyles = (rating: number) => {
    let fontSize = 'sm';
    let color = 'gray.600';

    if (rating >= 8) {
      fontSize = 'lg';
      color = 'green.500';
    } else if (rating >= 5) {
      fontSize = 'md';
      color = 'yellow.500';
    } else {
      fontSize = 'sm';
      color = 'red.500';
    }

    return { fontSize, color };
  };

  return (
    <VStack spacing={4} align="stretch">
      {reviews.map((review) => (
        <Box key={review.id} p={5} shadow="md" borderWidth="1px">
          <HStack justify="space-between" align="flex-start">
            <Box>
              <Avatar name={review.author} />
              <Text mt={2}>{review.author}</Text>
              <Text fontSize="sm">{review.date}</Text>
            </Box>
            <Text {...mapRatingStyles(review.rating)}>Rating: {review.rating}</Text>
          </HStack>
          <HStack justify="center" mt={2}>
            {review.artist && <Text>Artist: {review.artist}</Text>}
            {review.album && <Text>Album: {review.album}</Text>}
            {review.song && <Text>Song: {review.song}</Text>}
          </HStack>
          <Text mt={4}>{review.content}</Text>
        </Box>
      ))}
    </VStack>
  );
};
