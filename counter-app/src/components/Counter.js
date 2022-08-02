import React from 'react'

import {useSelector} from 'react-redux'; //useSelector = hook

function Counter() { 
    //countValue içine yazılan fonskiyon bir callback fonksiyonudur
    const countValue = useSelector((state)=> state.counter.value);

  return (
    <div>
    <h1>{countValue}</h1>
    </div>
  )
}

export default Counter