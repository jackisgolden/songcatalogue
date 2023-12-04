import { useEffect, useState } from 'react';
import { Box, VStack, Text, Avatar } from '@chakra-ui/react';

interface Review {
  id: number;
  author: string;
  content: string;
  date: string;
}

export const Feed = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    // Replace 'your-api-url' with the actual URL of your API
    fetch('your-api-url')
      .then((response) => response.json())
      .then((data: Review[]) => setReviews(data))
      .catch((error) => console.error('Error fetching reviews:', error));
  }, []);

  return (
    <VStack spacing={4} align="stretch">
      {reviews.map((review) => (
        <Box key={review.id} p={5} shadow="md" borderWidth="1px">
          <Avatar name={review.author} />
          <Text mt={2}>{review.author}</Text>
          <Text fontSize="sm">{review.date}</Text>
          <Text mt={4}>{review.content}</Text>
        </Box>
      ))}
    </VStack>
  );
};
