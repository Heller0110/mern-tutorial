import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";
import { useState } from "react";

export function Counter() {

    const [increasingAmount, setIncreasingAmount] = useState(0);

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <button onClick={() => dispatch(increment())}>
                    Increment
                </button>
                <span>{count}</span>
                <button onClick={() => dispatch(decrement())}>
                    Decrement
                </button>
                <input type="text" value={increasingAmount} onChange={(e) => {
                    setIncreasingAmount(Number(e.target.value))
                }} />
                <button onClick={() => dispatch(incrementByAmount(increasingAmount))}>
                    X Increase
                </button>
            </div>
        </div>
    )
}