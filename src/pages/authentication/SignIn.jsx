import React, { useState } from 'react'
import Button from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contextAPI/authContext'
import LoadingButton from '../../components/LoadingButton'

const SignIn = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('') 
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const { signIn } = useAuth()

  const handleSignIn = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    signIn(email, password)
    .then((res) => {
      // console.log(res)
      navigate('/luxebay')
    })
    .catch((err) => {
      // console.log(err.message)
      setLoading(false)
      setError(err.message)
    })
  

  }

  return (
    <div className='h-screen  flex justify-center items-center  '>
      
      <div className=' w-full mx-2 md:w-2/5 xl:w-1/3 2xl:w-1/5	'>
        <h1 className='font-input text-center'>
          Welcome to LuxeBay, Please Enter your credentials!
        </h1>
     
    <form onSubmit={handleSignIn}>
      <input
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      type='text'
      className='w-full border border-black p-2 outline-none rounded-sm font-input my-2' 
      placeholder='Enter your email'
      required
      />

      <input
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      type='password'
      className='w-full border border-black p-2 outline-none rounded-sm font-input my-2' 
      placeholder='Enter your password'
      required
      />
    
    <div>
      {error && <p className='text-center font-input text-red-500 text-sm'>{error}</p>}
    </div>

    {loading ?  <LoadingButton></LoadingButton> :  <Button>Sign In</Button>}
   
    </form>

    <div className='text-center font-input text-sm text-orange-500' >
      <Link to='signup' className='underline' >Create an account</Link>
    </div>


      </div>
      
      
      </div>
  )
}

export default SignIn