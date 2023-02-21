import React from 'react'

export const UseState = ({event1, event2, event3, counter, styleNumber}) => {
  
  return (
    <>
    <h2 className={styleNumber}>{counter}</h2>
    <button onClick={event1}>Add</button>     
    <button onClick={event2}>Substract</button>     
    <button onClick={event3}>Reset</button>     
    </>
  )
}
