import React from 'react'

const Contact = () => {
  return (
    <div className='h-screen flex justify-center items-center'>

        <div className='main-container'>

          <div className='title font-input text-center mx-2'>
            <h1 className='text-3xl'>Welcome to Luxebay contact page!</h1>
            <h1 className='text-sm'>If you have any inquiries, feel free to contact us!</h1>
          </div>

          <div className='inputs m-2 font-input '>

            <form>
              <input type='text' 
               className='w-full border p-2 rounded-lg outline-none my-2' 
               placeholder='Name...'
               />

               <input type='text' 
               className='w-full border p-2 rounded-lg outline-none my-2' 
               placeholder='Subject...'
               />

               <textarea 
               className='w-full border p-2 rounded-lg outline-none my-2'
               placeholder='Message...'
               />

               <button className='w-full bg-indigo-500 p-2 rounded-lg text-white'>
                Submit
               </button>

            </form>

          </div>

        </div>
    
    
    </div>
  )
}

export default Contact