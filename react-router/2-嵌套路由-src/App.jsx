import React from 'react'
import { Routes , Route, Navigate } from 'react-router-dom'

import Home from './pages/home/Home'
import Child1 from './pages/home/components/Child1'
import Child2 from './pages/home/components/Child2'
import Child3 from './pages/home/components/Child3'

import Detail from './pages/detail/Detail'
import Login from './pages/login/Login'
import Notfound from './pages/404/404'



const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}>
        {/* 路由重定向 */}
        <Route path="/" element={<Navigate to="/child1" />} />
        <Route path='/child1' element={<Child1/>} />
        <Route path='/child2' element={<Child2/>} />
        <Route path='/child3' element={<Child3/>} />

      </Route>
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