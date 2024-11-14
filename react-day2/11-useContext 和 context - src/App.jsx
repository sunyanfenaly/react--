import React, { useContext, useState } from 'react'
import Child1 from './components/Child1'
import './App.scss'
import { Provider } from './context/appCtx'

const App = () => {

  const [tit, setTit] = useState('Hello React')
  const [ arr, setArr ] = React.useState([1, 2, 3])

 
  return (
    <Provider value={{ tit, setTit, arr, setArr }}>
      <div>
        <h1>{tit}</h1>
        

        <ul>
          {arr.map(item => <li key={item}>{item}</li>)}
        </ul>

        
        < Child1 />
      </div>
    </Provider>
  )
}

export default App