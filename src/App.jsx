import React, { useState } from 'react';
import SearchBox from './SearchBox';
import DataGrid from './DataGrid';

const initialData = [
  { name: 'Apple', color: 'Red', origin: 'USA' },
  { name: 'Banana', color: 'Yellow', origin: 'India' },
  { name: 'Orange', color: 'Orange', origin: 'Spain' },
  { name: 'Kiwi', color: 'Brown', origin: 'New Zealand' },
  { name: 'Mango', color: 'Yellow', origin: 'India' },
  { name: 'Grapes', color: 'Green', origin: 'France' },
  { name: 'Strawberry', color: 'Red', origin: 'USA' },
  { name: 'Blueberry', color: 'Blue', origin: 'Canada' },
  { name: 'Pineapple', color: 'Brown', origin: 'Philippines' },
];

const App = () => {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState(initialData);

  const handleSearch = (searchText) => {
    setQuery(searchText);

    const filtered = initialData.filter((item) =>
      Object.values(item).some(value =>
        value.toLowerCase().includes(searchText.toLowerCase())
      )
    );

    setFilteredData(filtered);
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h2>Fruit Grid Search</h2>
      <SearchBox value={query} onSearch={handleSearch} />
      <DataGrid data={filteredData} />
    </div>
  );
};

export default App;
