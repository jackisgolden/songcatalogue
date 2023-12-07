import { useState, useEffect } from 'react';
import { VStack, Divider, Box } from '@chakra-ui/react';
import { NewReview } from '../../components/NewReview/NewReview';
import { MakePlaylist } from '../../components/MakePlaylist/MakePlaylist';
import { Link } from 'react-router-dom';
import { Search } from '../Search/Search'

interface Playlist {
  id: number;
  name: string;
}

export const LeftCol: React.FC = () => {
  const dummyPlaylists = [
    { id: 1, name: 'Chill Vibes' },
    { id: 2, name: 'Workout Mix' },
    { id: 3, name: 'Study Tunes' },
  ];
  const [playlists, setPlaylists] = useState<Playlist[]>(dummyPlaylists);

  useEffect(() => {
    fetch('/api/users/:user/playlists')
      .then((response) => response.json())
      .then((data: Playlist[]) => {
        setPlaylists(data);
      })
      .catch((error) => {
        console.error('Error fetching playlists:', error);
      });
  }, []);

  return (
    <VStack w="100%" spacing={4} align="stretch">
      <Search/>
      <Divider />
      <Box boxShadow="md" p="4" borderRadius="md" bg="gray.50">
        <NewReview />
        <MakePlaylist />
      </Box>
      {playlists.map((playlist: Playlist) => (
        <Box boxShadow="md" p="4" borderRadius="md" bg="purple.50" my="2" key={playlist.id}>
          <Link to={`/playlist/${playlist.id}`}>
            <div>{playlist.name}</div>
          </Link>
        </Box>
      ))}
    </VStack>
  );
};
