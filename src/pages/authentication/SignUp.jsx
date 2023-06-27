import React, { useState } from 'react'
import Button from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contextAPI/authContext'
import LoadingButton from '../../components/LoadingButton'

const SignUp = () => {

  const [newEmail, setNewEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const { signUp  } = useAuth()


  const handleSignUp =async (e) => {

    e.preventDefault()
    setError('')
    setLoading(true)

    signUp(newEmail, newPassword)
    .then((res) => {
      // console.log(res)
      navigate('/')

    })
    .catch((err) => {
      // console.log(err.message)
      setLoading(false)
      setError(err.message)
    })


  }

  

  return (
    <div className='h-screen  flex justify-center items-center '>
      
      <div className=' w-full mx-2 md:w-2/5 xl:w-1/3 2xl:w-1/5	'>
        <h1 className='font-input text-center'>
          Welcome to LuxeBay, Please Create your account!
        </h1>
     
    <form onSubmit={handleSignUp}>
      <input
      value={newEmail}
      onChange={(e) => setNewEmail(e.target.value)}
      type='text'
      className='w-full border border-black p-2 outline-none rounded-sm font-input my-2' 
      placeholder='Enter your email'
      />

      <input
      value={newPassword}
      onChange={(e) => setNewPassword(e.target.value)}
      type='password'
      className='w-full border border-black p-2 outline-none rounded-sm font-input my-2' 
      placeholder='Enter your password'
      />

    <div>
      {error && <p className='text-center font-input text-red-500 text-sm'>{error}</p>}
    </div>


       {loading ?  <LoadingButton></LoadingButton> :  <Button>Sign Up</Button>}

   
    </form>

    <div className='text-center font-input text-sm text-orange-500 flex justify-center items-center' >
      <h1>Already have an account?</h1> 
      <Link to='/' className='underline ml-1'> Sign in</Link>
    </div>

      </div>
      
      
      </div>
  )
}

export default SignUp