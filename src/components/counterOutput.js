import { useSelector } from 'react-redux';
import React from 'react';

export default function CounterOutput() {
    const counter = useSelector((state) => state.counter);
    return (
        <div>
            Counter Value : {counter}
        </div>
    )
}