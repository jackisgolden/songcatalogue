import React, { useState } from 'react';

const CreatePlaylist: React.FC = () => {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    console.log('Playlist Created:', name); // Replace with actual creation logic
    setName('');
  };

  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={handleSubmit}>Create Playlist</button>
    </div>
  );
};

export default CreatePlaylist;
