import { useEffect, useState } from 'react';
import {
  Box,
  Image,
  Text,
  VStack,
  Grid,
  GridItem
} from '@chakra-ui/react';

interface Song {
  name: string;
  artist: string;
  album: string;
  duration: string;
}

interface Playlist {
  name: string;
  imageUrl: string;
  songs: Song[];
}

export const Playlist = () => {
  const [playlist, setPlaylist] = useState<Playlist | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://example.com/api/playlists/1');
      const data = await response.json();
      setPlaylist(data);
    };

    fetchData();
  }, []);

  if (!playlist) {
    return <div>Loading...</div>;
  }

  return (
    <Box
      minH="100vh"
      w="100%"
      p={4}
      display="flex"
      flexDirection="row"
    >
      <VStack
        flex="1"
        align="start"
        maxW="sm"
        spacing={4}
      >
        <Image
          borderRadius="md"
          boxSize="150px"
          src={playlist.imageUrl}
          alt={`${playlist.name} Cover`}
        />
        <Text fontSize="2xl">{playlist.name}</Text>
        <Box w="full">
          <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            {playlist.songs.map((song, index) => (
              <GridItem key={index} w="100%">
                <VStack align="start">
                  <Text fontWeight="bold">{song.name}</Text>
                  <Text>{song.artist}</Text>
                  <Text fontSize="sm">{song.album}</Text>
                  <Text fontSize="sm">{song.duration}</Text>
                </VStack>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </VStack>
    </Box>
  );
};

export default Playlist;
