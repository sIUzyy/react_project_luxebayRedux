import React from 'react'
import MainRoutes from './router/MainRoutes'
import  AuthContext  from './contextAPI/authContext'
const App = () => {
  return (
    <div className=''>
      <AuthContext>
        <MainRoutes/>
      </AuthContext>
    </div>
  )
}

export default App