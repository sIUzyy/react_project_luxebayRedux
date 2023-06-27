const icons = [

    {
        id:1 ,
        icon: <FaReact size={30}/>
    },
    
    {
        id:2 ,
        icon: <SiRedux size={30}/>
    },
    
    {
        id:3 ,
        icon: <SiTailwindcss size={30}/>
    },
    
    {
        id:4 ,
        icon: <SiFirebase size={30}/>
    },

]

import React from 'react'
import {AiOutlineTool} from 'react-icons/ai'
import {SiRedux, SiTailwindcss, SiFirebase} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'

const Technology = () => {
  return (
    <div className='h-screen flex justify-center items-center max-w-7xl mx-auto'>

       <div className='main-container mx-2'>

       
        <div className='text-center text-4xl font-input uppercase'>
            <h1>Technologies</h1>
        </div>

        <div className='content font-input text-sm text-justify my-2 md:text-center '>
            <p>
            LuxeBay harnesses the power of cutting-edge technologies such as React, Tailwind CSS, Redux, Firebase, and API integration to deliver a seamless and intuitive online shopping platform, 
            ensuring a delightful experience for users.
            </p>
        </div>

        <div className='tech flex justify-center item-center my-5 '>
           {icons.map((tech) => (
                <span className='mx-2 text-[#A1A1AA]'>{tech.icon}</span>
           ))}
        </div>
    </div>
        
    </div>
  )
}

export default Technology