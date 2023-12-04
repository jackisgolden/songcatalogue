import React, { useState } from 'react';
import './CreatePlaylist.css'; // Importing the CSS file for styling

interface Playlist {
  id: number;
  name: string;
  // Add other properties as needed
}

const CreatePlaylist: React.FC = () => {
  const [name, setName] = useState('');
  const [playlists, setPlaylists] = useState<Playlist[]>([]); // Typed with Playlist interface

  const handleSubmit = () => {
    console.log('Playlist Created:', name);
    // Add logic to create the playlist
    // Update the playlists list with the new playlist
    setName('');
  };

  return (
    <div className="playlist-container">
      <div className="playlist-list">
        {playlists.map((playlist) => (
          <div className="playlist-list-item" key={playlist.id}>
            {playlist.name} {/* Using the name property from the Playlist type */}
          </div>
        ))}
      </div>
      <div className="playlist-create-form">
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="New Playlist Name"
        />
        <button onClick={handleSubmit}>Create Playlist</button>
      </div>
    </div>
  );
};

export default CreatePlaylist;
