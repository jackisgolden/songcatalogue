import { useState, useEffect } from 'react';
import { VStack, Input } from '@chakra-ui/react';
import { NewReview } from '../../pages/NewReview/NewReview'
import { MakePlaylist } from '../../components/MakePlaylist/MakePlaylist'
//import { SearchBar } from '../../components/SearchBar/SearchBar'


interface Playlist {
  id: number;
  name: string;
  // Add other properties of your playlist here
}

export const LeftCol: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [playlists, setPlaylists] = useState<Playlist[]>([]);

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
      <Input
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <NewReview />
      <MakePlaylist />
      {playlists.map((playlist: Playlist) => (
        <div key={playlist.id}>{playlist.name}</div>
        // You can replace "div" with a custom playlist component if needed
      ))}
    </VStack>
  );
};
