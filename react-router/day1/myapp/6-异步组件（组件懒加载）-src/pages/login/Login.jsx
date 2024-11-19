import React from 'react'
import { useSearchParams, useLocation, useNavigate  } from 'react-router-dom'


const Login = () => {
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const login  =  () => {
    localStorage.setItem('token', '123')
    const form = searchParams.get('form') || '/'
    console.log(location)
    navigate(form, {
      replace: true
    })
  }

  return (
    <div>
      <h1>登录页面</h1>
      <button onClick={login}>登录</button>
    </div>
  )
}

export default Login