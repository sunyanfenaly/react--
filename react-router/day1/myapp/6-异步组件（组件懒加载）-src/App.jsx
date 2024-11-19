import React, { useEffect} from 'react'
import { useRoutes, useLocation  } from 'react-router-dom'
import routerConfig from './router'


const App = () => {
  const location = useLocation()

  useEffect(() =>{
    console.log(location.pathname)
  }, [location.pathname])

  
  const routers = useRoutes(routerConfig)
  return <div className='app'>{routers}</div>
}

export default App