import React from 'react'
import Home from './Pages/Login/Home/Home'
import { Routes,Route } from 'react-router-dom'
import Login from './Pages/Login/Login'
import About from './Pages/Login/about'

const App = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
             <Route path='/login' element={<Login/>}></Route>
              <Route path='/about' element={<About/>}></Route>

        </Routes>

    </div>
  )
}

export default App
