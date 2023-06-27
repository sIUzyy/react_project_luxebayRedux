import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ErrorPage from '../components/ErrorPage'
import SignIn from '../pages/authentication/SignIn'
import Footer from '../header/Footer'
import Navbar from '../header/Navbar'
import SignUp from '../pages/authentication/SignUp'
import About from '../pages/footer/About'
import Technology from '../pages/footer/Technology'
import Contact from '../pages/footer/Contact'
import Main from '../pages/users/Main'
import UserCart from '../pages/users/UserCart'

import ProtectedRoutes from './ProtectedRoutes'
import UserProtected from './UserProtected'

const MainRoutes = () => {
  return (
    <Router>

        <Navbar/>

            <Routes>
              {/* main pages components */}
                <Route path='/' element={<ProtectedRoutes><SignIn/></ProtectedRoutes>} />
                <Route path='/signup' element={<ProtectedRoutes><SignUp/></ProtectedRoutes>} />
              
              {/* footer pages components */}
                <Route path='/about' element={<About/>} />
                <Route path='/technology' element={<Technology/>} />
                <Route path='/contact' element={<Contact/>} />


              {/* pages when user already login their account */}
                <Route path='/luxebay' element={<UserProtected><Main/></UserProtected>} />
                <Route path='/cart' element={<UserCart/>} />

                <Route path='*' element={<ErrorPage/>} />
            </Routes>

         <Footer />

    </Router>
  )
}

export default MainRoutes