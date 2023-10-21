import React, { useState } from 'react';

const Search: React.FC = () => {
  const [query, setQuery] = useState('');
  // Replace below with actual data fetching and filtering
  const data = ['Song1', 'Song2', 'Artist1', 'Artist2'];
  const results = data.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <ul>
        {results.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
