import React, { useState } from 'react'

const App = () => {
    const[isVisible,setHidden]=useState(true)
  const  handleHidden =function(){
      setHidden ((isVisible)=> !isVisible)
    }
  return (
    <div>
    { isVisible && <h1>tharun vasireddi</h1> }
      <button onClick={handleHidden}></button>
    </div>
  )
}

export default App