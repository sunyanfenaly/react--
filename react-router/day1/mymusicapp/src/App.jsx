import React, { useEffect} from 'react'
import { useRoutes, useLocation  } from 'react-router-dom'
import routerConfig from './router'
import { AudioProvider } from './store/audio'

const App = () => {
  // const location = useLocation()

  // useEffect(() =>{
  //   console.log(location.pathname)
  // }, [location.pathname])

  
  const routers = useRoutes(routerConfig)
  return <AudioProvider>
      <div className='app'>{routers}</div>
  </AudioProvider>
}

export default App