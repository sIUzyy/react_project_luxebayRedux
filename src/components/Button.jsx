//button component

import React from 'react'

const Button = ({onClick, children}) => {
  return (
    <button 
    onClick={onClick}
    className='p-2 w-full my-2 bg-indigo-500 text-white rounded-md hover:opacity-75'>

    {children}

    </button>
    )
}

export default Button