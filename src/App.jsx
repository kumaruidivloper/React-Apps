import React from 'react';
import { CounterProvider } from './CounterContext';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';
import ComponentD from './ComponentD';
import ComponentE from './ComponentE';

const App = () => {
  return (
    <CounterProvider>
      <div style={{ fontFamily: 'Arial', padding: '20px' }}>
        <h2>Shared Counter via Context</h2>
        <ComponentA />
        <ComponentB />
        <ComponentC />
        <ComponentD />
        <ComponentE />
      </div>
    </CounterProvider>
  );
};

export default App;