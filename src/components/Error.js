import React from 'react'
import { useRouteError } from 'react-router'

const Error = () => {

  const err = useRouteError();

  console.log(err);

  return (
    <>
        <div>404 Error Page</div>
        <button>Return Home</button>
        <p>{err.status}: {err.statusText}</p>
    </>
  )
}

export default Error