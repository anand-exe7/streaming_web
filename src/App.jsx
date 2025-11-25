import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './Pages/Login/Login'
import About from './Pages/Login/about'
import Index from './Pages/Login'
import ProfileSettings from './Pages/Login/ProfileSettings'

const App = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Index/>}></Route>
             <Route path='/login' element={<Login/>}></Route>
              <Route path='/about' element={<About/>}></Route>
              <Route path='/profile' element={<ProfileSettings/>}></Route>

        </Routes>

    </div>
  )
}

export default App
