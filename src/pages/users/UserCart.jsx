import React, {useEffect, useState} from 'react'
import { useAuth } from '../../contextAPI/authContext'
import { Link } from 'react-router-dom'
import {AiOutlineArrowRight, AiOutlineClose} from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { remove } from '../../features/cartSlices'

const UserCart = () => {

  const [isEmpty, setIsEmpty] = useState(true)
  const products = useSelector(state => state.userCart)
  const dispatch = useDispatch()
  const { currentUser } = useAuth()


  const removeCart = (id) => {
    dispatch(remove(id))
  }

  useEffect(() => {
    setIsEmpty(Object.values(products).reduce((a, b) => a + b, 0) === 0);
  }, [products])


  return (

    <div className='py-16 mx-2'>
      {!currentUser ? 
      ( 
      <div className='font-input uppercase text-center flex justify-center items-center h-screen'> 
          <div>
            <h1> login to view the cart items </h1>
            <div className=' w-full'>
            <Link className='' to='/'>
                <AiOutlineArrowRight size={30} className=' w-full p-1 text-indigo-600'/>
            </Link>
        </div>
            </div>
      </div>):
      (
        <div className='mx-auto max-w-7xl h-auto'>

          {isEmpty ? <div className='h-screen font-input flex justify-center items-center uppercase text-2xl text-center'>your cart is empty</div> : null}
           <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 '>

          {products.map((product) => (          
          <div className='border rounded-md    '>
            <div className='flex'>
            <div className=''>
              <img className='w-36 h-36 rounded-md p-2' src={product.image} alt='product-image'  />
            </div>

            <div className='font-input mx-4 text-sm  pt-2 flex justify-between w-[50%] md:w-[60%] lg:w-[70%] xl:w-[75%] '>
              <div> 
              <h1 className=''>Product Name:</h1>
              <h1 className='text-gray-500'> {product.title}</h1>
              <h1 className='my-3 '>Price:  <span className='text-red-500'>₱{product.price}</span></h1>
              </div>

              
            <div className='text-red-500'>

              <button onClick={() =>removeCart(product.id)}>
              <AiOutlineClose />
              </button>
              </div>
            </div>

            </div>

       
            </div>
          ))}
          </div>


        </div>
      )
      }
    </div>
  )
}

export default UserCart