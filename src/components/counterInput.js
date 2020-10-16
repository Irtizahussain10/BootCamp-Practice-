import React from 'react';
import { useDispatch } from 'react-redux';
import { IncrementAction, DecrementAction } from './actions.js';

export default function CounterInput() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(IncrementAction())}>+</button>
      <button onClick={() => dispatch(DecrementAction())}>-</button>
    </div>
  )
}