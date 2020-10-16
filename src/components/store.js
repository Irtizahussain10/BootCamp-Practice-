import { createStore } from 'redux';
import CounterReducer from './counterReducer.js';

const store = createStore(CounterReducer);

export default store; 