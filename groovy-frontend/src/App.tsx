import React from 'react';
import Search from './Search';
import CreateReview from './CreateReview';
import CreatePlaylist from './CreatePlaylist';

function App() {
  return (
    <div className="App">
      <h1>Search</h1>
      <Search />

      <h1>Create Review</h1>
      <CreateReview />

      <h1>Create Playlist</h1>
      <CreatePlaylist />
    </div>
  );
}

export default App;

