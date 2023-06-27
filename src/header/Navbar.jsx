import React from 'react'
import { AiOutlineShopping } from 'react-icons/ai'
import { IoIosLogOut } from 'react-icons/io'
import { useAuth } from '../contextAPI/authContext'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const navigate = useNavigate()

  const cartItems = useSelector(state => state.userCart)

  const { currentUser, logOut } = useAuth()

  const handleLogOut =  async () => {
    try{
      logOut()
      navigate('/')

    }catch(err) {
      console.log(err.message)
    }
  }

  return (
    <div className='max-w-7xl min-w-full bg-[#3B3937]  text-[#DAD8D7] py-3 text-sm fixed top-0 font-input  z-10'>

      <div className=' flex justify-between items-center mx-3 xl:mx-10'>
        <div className='uppercase text-sm'>
        <Link to={!currentUser ? '/' : '/luxebay'}>Luxebay</Link>
        </div>

        <div className='flex items-center'>

          <h1 className=''>{currentUser && currentUser.displayName || currentUser && currentUser.email}</h1>

        <div className='flex items-center mr-2 md:mx-3'>
        <Link to='/cart' className='mx-1' >
            <AiOutlineShopping size={25}/>
        </Link>
        <div className='font-input text-red-500 text-sm'>
        {/* if the currentUser is currently login show the length of cartItems / show how many item in the cart */}
        {currentUser && <h1>{cartItems.length}</h1>} 

        </div>
        </div>

          <button onClick={handleLogOut} className='mx-1'>
            <IoIosLogOut size={25}/>
          </button>
        </div>
        </div>

    </div>
  )
}

export default Navbar