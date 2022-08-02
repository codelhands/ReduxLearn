import React from 'react'

import {useSelector,useDispatch} from 'react-redux'; //useSelector = hook

import {increase,decrease} from '../redux/counter/counterSlice';

function Counter() { 
    //countValue içine yazılan fonskiyon bir callback fonksiyonudur
    const countValue = useSelector((state)=> state.counter.value);

    const dispatch = useDispatch();

  return (
    <div>
    <h1>{countValue}</h1>


    <button onClick={() => dispatch(increase())}>Increase</button>
    <button onClick={() => dispatch(decrease())}>Decrease</button>
    </div>
  )
}

export default Counter