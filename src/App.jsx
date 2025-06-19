import React, { useState } from 'react';

const App = () => {
  const allItems = [
    'Apple',
  'Apricot',
  'Avocado',
  'Banana',
  'Blackberry',
  'Blueberry',
  'Boysenberry',
  'Cantaloupe',
  'Cherry',
  'Coconut',
  'Cranberry',
  'Currant',
  'Date',
  'Dragonfruit',
  'Durian',
  'Elderberry',
  'Fig',
  'Gooseberry',
  'Grape',
  'Grapefruit',
  'Guava',
  'Honeydew',
  'Jackfruit',
  'Kiwi',
  'Kumquat',
  'Lemon',
  'Lime',
  'Lychee',
  'Mango',
  'Mangosteen',
  'Melon',
  'Mulberry',
  'Nectarine',
  'Orange',
  'Papaya',
  'Passionfruit',
  'Peach',
  'Pear',
  'Persimmon',
  'Pineapple',
  'Plum',
  'Pomegranate',
  'Pomelo',
  'Raspberry',
  'Rambutan',
  'Starfruit',
  'Strawberry',
  'Tamarind',
  'Tangerine',
  'Ugli fruit',
  'Watermelon'
  ];

  const [query, setQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState(allItems);

  const handleKeyUp = (e) => {
    const input = e.target.value;
    setQuery(input);

    // Filter the list based on input
    const result = allItems.filter(item =>
      item.toLowerCase().includes(input.toLowerCase())
    );

    setFilteredItems(result);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Fruit Search</h2>

      <input
        type="text"
        placeholder="Search fruits..."
        onKeyUp={handleKeyUp}
        style={styles.input}
      />

      <ul style={styles.list}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index} style={styles.item}>{item}</li>
          ))
        ) : (
          <li style={styles.noMatch}>No fruits found</li>
        )}
      </ul>
    </div>
  );
};

// 🖌 Basic UI Styling
const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    fontFamily: 'Arial',
    textAlign: 'left',
  },
  heading: {
    marginBottom: '20px'
  },
  input: {
    padding: '10px',
    width: '100%',
    fontSize: '16px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px'
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    border: '1px solid #ccc',
    maxHeight: '428px',
    overflowY: 'auto'
  },
  item: {
    padding: '10px',
    borderBottom: '1px solid #eee'
  },
  noMatch: {
    color: 'gray',
    padding: '10px'
  }
};

export default App;
