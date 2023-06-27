const content = [

    {
      id: 1,
      title: 'About Luxebay',
      path: '/about'
    },

    {
      id: 2,
      title: 'Contact Luxebay',
      path: '/contact'
    },

    {
      id: 3,
      title: 'Technology',
      path: '/technology'
    },

    {
      id: 4,
      title: 'API',
      path: 'https://fakestoreapi.com'
    },
]

import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

  const [year] = useState(new Date().getFullYear() )

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  
  return (
    <div className='max-w-7xl min-w-full bg-[#3B3937]  text-[#DAD8D7] py-24 '>
      
      <div  className='text-center md:flex md:justify-center '>
      {content.map((data) => (
        <div className='py-4 text-sm md:py-0 md:px-4' key={data.id}>
        <Link onClick={scrollToTop} to={data.path} className='hover:text-white '>{data.title}</Link>
        </div>
      ))}

      </div>

      <div className='text-center text-sm'>
        <h1 className='py-4'>Copyright © {year} LuxeBay. All rights reserved.</h1>

      </div>

    </div>

  )
}

export default Footer