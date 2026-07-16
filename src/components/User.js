import React, { useEffect } from 'react'

import { useState } from 'react';


const User = ({name, designation}) => {
    
    
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  useEffect(() => {
    //for api call
  },[])
  return (
    <div className='user-card'>
        <h1>Name: {name}</h1>
        <h2>Count: {count}</h2>
        <h2>Count: {count2}</h2>
        <p>Designation: {designation}</p>
        <p>Works at: EverestIMS Technologies</p>
    </div>
  )
}

export default User;