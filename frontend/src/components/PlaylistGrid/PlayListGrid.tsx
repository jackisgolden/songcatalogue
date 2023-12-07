import { Box, Text, HStack, Image } from "@chakra-ui/react";

const playlistsData = [
  {
    name: "Playlist 1",
    imageSrc: "http://www.gravatar.com/avatar",
  },
  {
    name: "Playlist 2",
    imageSrc: "http://www.gravatar.com/avatar",
  },
  {
    name: "Playlist 3",
    imageSrc: "http://www.gravatar.com/avatar",
  },
  // Add more playlists as needed
];

function PlaylistGrid() {
  return (
    <Box>
      <Text fontSize="xl" mb={2}>
        Playlists
      </Text>
      <HStack spacing={4}>
        {playlistsData.map((playlist, index) => (
          <Box key={index}>
            <Image src={playlist.imageSrc} alt={playlist.name} maxW="100px" maxH="100px" />
            <Text mt={2}>{playlist.name}</Text>
          </Box>
        ))}
      </HStack>
    </Box>
  );
}

export default PlaylistGrid;
