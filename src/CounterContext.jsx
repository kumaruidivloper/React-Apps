import React, { createContext, useContext, useReducer } from 'react';

// 1. Create Context
const CounterContext = createContext();

// 2. Reducer function to manage state updates
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

// 3. Context Provider component
export const CounterProvider = ({ children }) => {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <CounterContext.Provider value={{ count, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

// 4. Custom hook to use context
export const useCounter = () => useContext(CounterContext);
