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
  const [sortConfig, setSortConfig] = useState({ key: '', direction: 'asc' });

  

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const valueA = a[sortConfig.key].toLowerCase();
    const valueB = b[sortConfig.key].toLowerCase();

    if (valueA < valueB) return sortConfig.direction === 'asc' ? -1 : 1;
    if (valueA > valueB) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  const handleSearch = (searchText) => {
    setQuery(searchText);

    const filtered = initialData.filter((item) =>
      Object.values(item).some(value =>
        value.toLowerCase().includes(searchText.toLowerCase())
      )
    );

    setFilteredData(filtered);
  };

  const handleSort = (key) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        // Toggle direction
        return {
          key,
          direction: prev.direction === 'asc' ? 'desc' : 'asc',
        };
      }
      return { key, direction: 'asc' }; // Default to asc when new column clicked
    });
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h2>Fruit Grid Search</h2>
      <SearchBox value={query} onSearch={handleSearch} />
      <DataGrid data={sortedData} onSort={handleSort} sortConfig={sortConfig}/>
    </div>
  );
};

export default App;
