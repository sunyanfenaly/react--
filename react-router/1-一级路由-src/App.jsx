import React from 'react'
import { Routes , Route, NavLink } from 'react-router-dom'

import Home from './pages/home/Home'
import Detail from './pages/detail/Detail'
import Login from './pages/login/Login'
import Notfound from './pages/404/404'



const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/detail' element={<Detail/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='*' element={<Notfound/>} />
    </Routes>
    // <div>
    //     <Routes>
    //       <Route path='/' element={<Home/>} />
    //       <Route path='/detail' element={<Detail/>} />
    //       <Route path='/login' element={<Login/>} />
    //       <Route path='*' element={<Notfound/>} />
    //     </Routes>
    //     <div>
    //       <NavLink to='/login'>登录</NavLink>
    //       <NavLink to='/detail'>详情</NavLink>  
    //       <NavLink to='/'>首页</NavLink>
    //     </div>
    // </div>
  )
}

export default App