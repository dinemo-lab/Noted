"use client"
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const handleSearch = (e) => {
    setTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search notes..."
        value={term}
        onChange={handleSearch}
        className="w-full p-2 border rounded"
      />
    </div>
  );
};

export default SearchBar;
