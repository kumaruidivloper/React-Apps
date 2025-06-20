import React from 'react';

const DataGrid = ({ data, onSort, sortConfig  }) => {

  const renderArrow = (key) => {
    if (sortConfig.key !== key) return '⇅';
    console.log('Sorting by', sortConfig.key, '→', sortConfig.direction);
    return sortConfig.direction === 'asc' ? '↑' : '↓';
  };

  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{...cellStyle, ...pointer}} onClick={() => onSort('name')}>Name {renderArrow('name')}</th>
            <th style={{...cellStyle, ...pointer}} onClick={() => onSort('color')}>Color {renderArrow('color')}</th>
            <th style={{...cellStyle, ...pointer}} onClick={() => onSort('origin')}>Origin {renderArrow('origin')}</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, idx) => (
              <tr key={idx}>
                <td style={cellStyle}>{item.name}</td>
                <td style={cellStyle}>{item.color}</td>
                <td style={cellStyle}>{item.origin}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" style={{ ...cellStyle, textAlign: 'center', color: 'gray' }}>
                No fruits found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

const cellStyle = {
  border: '1px solid #ddd',
  padding: '10px',
  textAlign: 'left'
};
const pointer = {
    cursor: 'pointer'
}

export default DataGrid;
