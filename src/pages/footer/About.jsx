import React from 'react'
import { AiOutlineShopping } from 'react-icons/ai'


const About = () => {
  return (
    <div className='max-w-7xl mx-auto h-screen flex justify-center items-center'>
        
    <div className='main-container mx-2'>

        <div className='flex justify-center my-2 text-red-500'>
            <AiOutlineShopping size={40}/>
        </div>

        <div className='title text-4xl font-input text-center uppercase'>
            <h1>LuxeBay</h1>
        </div>

        <div className='content font-input my-2 text-justify text-sm md:text-center'>

            <p>
            LuxeBay is a dynamic and innovative ecommerce solution powered by a robust API infrastructure and driven by Redux, 
            offering a comprehensive and immersive online shopping experience for customers worldwide.
            </p>

        </div>

        </div>
    
    </div>
  )
}

export default About