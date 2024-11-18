import React from 'react'
import { useRoutes  } from 'react-router-dom'
import routerConfig from './router'


const App = () => {
  const routers = useRoutes(routerConfig)
  return <div className='app'>{routers}</div>
}

export default App