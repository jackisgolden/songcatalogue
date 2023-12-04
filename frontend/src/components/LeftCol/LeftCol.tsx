import { useState } from 'react';
import { VStack, Input, Box, Text } from '@chakra-ui/react';
import { NewReview } from '../../pages/NewReview/NewReview'
import { MakePlaylist } from '../../components/MakePlaylist/MakePlaylist'
//import { SearchBar } from '../../components/SearchBar/SearchBar'

const mockPlaylists = [
  'Chill Vibes',
  'Workout Hits',
  'Classic Rock',
  // Add more playlists here
];

export const LeftCol = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPlaylists = mockPlaylists.filter(playlist =>
    playlist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <VStack w="100%" spacing={4} align="stretch">
      <Input
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <NewReview/>
      <MakePlaylist/>
      {filteredPlaylists.map((playlist, index) => (
        <Box key={index} p={3} shadow="md" borderWidth="1px">
          <Text>{playlist}</Text>
        </Box>
      ))}
    </VStack>
  );
};
