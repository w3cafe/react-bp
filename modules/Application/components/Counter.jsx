import React from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import selectors from '../selectors/counter';
import ApplicationStore  from "../ApplicationStore";

const Counter = () => {
    const counter = useSelector(selectors,shallowEqual);
    const dispatch = useDispatch();
    const onIncrement = ()=> {
        dispatch({type: ApplicationStore.TYPES.INCREASE_COUNT});
    };

    return (<>
        <p>Count Is: {counter}</p>
        <button onClick={onIncrement}>Increase</button>
        </>)
};

export default Counter;

