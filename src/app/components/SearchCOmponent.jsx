// SearchComponent.jsx
import React, { useState } from 'react';

const SearchComponent = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Perform the search with the searchTerm
    onSearch(searchTerm);
  };

  return (
    <div className="msg-search-1">
      {/* Your search UI */}
      <input
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchComponent;
