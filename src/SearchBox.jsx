import React from 'react';

const SearchBox = ({ value, onSearch }) => {
  const handleKeyUp = (e) => {
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search by name, color, or origin..."
      defaultValue={value}
      onKeyUp={handleKeyUp}
      style={{
        padding: '10px',
        width: '100%',
        marginBottom: '20px',
        fontSize: '16px',
        border: '1px solid #ccc',
        borderRadius: '4px'
      }}
    />
  );
};

export default SearchBox;
