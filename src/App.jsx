import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
} from './redux/counter';

export default function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>The Count is: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(33))}>
        Increment by 33
      </button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}


