//error page component

import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineArrowRight} from 'react-icons/ai'

const ErrorPage = () => {
  return (
    <div className='max-w-7xl mx-auto h-screen flex justify-center items-center'>

        <div className='text-center font-error tracking-widest'>
            <h1 className='text-5xl '>ERROR 404</h1>    
            <p className='text-lg uppercase'>page not found</p>

        <div className=' w-full'>
            <Link className='p-2' to='/'>
                <AiOutlineArrowRight size={30} className=' w-full p-1'/>
            </Link>
        </div>
    </div>        
        
    </div>
  )
}

export default ErrorPage