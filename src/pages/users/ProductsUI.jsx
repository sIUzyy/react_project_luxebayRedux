import React, { useState, useEffect  } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../../features/cartSlices'
import SyncLoader from "react-spinners/SyncLoader";
import axios from 'axios'

const Products = () => {

  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  

  useEffect(() => {
    const url = 'https://fakestoreapi.com/products';
    axios.get(url)
      .then((res) => {
        setProduct(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      })

  }, [])


  


  const handleCart = (item) => {

    dispatch(add(item))

  }

  return (
    <div>
      {loading ? (<div className='h-screen flex justify-center items-center'> 
        <SyncLoader
        color='black'
        loading={loading}
      
        size={5}
       
      /> </div>) : (
        <div  className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 m-4 font-input py-16'>
        {product.map((item) => (

            <div key={item.id} className='border-2 h-auto relative'>
              <img className='w-64 h-64 mx-auto rounded-md py-2' src={item.image} alt='product image' />
            
            <div className='  mx-2 mt-5  text-sm'>
                <h1 className=' '>{item.title}</h1>
            </div>

            <div className='flex justify-between mx-2 mt-3 items-center'> 
            <h1 className='text-orange-500'>₱  {item.price}</h1>
            <p className=' text-sm '>RATING: <span className='text-yellow-500'>{item.rating?.rate}</span></p>

           </div>

            <div className=' mx-2 my-5  '>
             
              <h1 className='capitalize'>{item.category}</h1>
                <p className=' text-sm  text-gray-500 opacity-80 text-justify'>{item.description}</p>
              </div>

              <div className='py-10'>
              
              <button className='absolute bottom-0 right-0 mb-2 mr-2 border bg-black text-white text-sm p-2 w-32 hover:opacity-70' onClick={() => handleCart(item)}> Add to cart </button>
              </div>
            </div>
          ))}
        </div>
        )}

       
    </div>
  )
}

export default Products