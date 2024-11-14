import React from 'react'
import Child1 from './components/Child1'
import Child2 from './components/Child2'
import './App.scss'
const App = () => {

  const [show, setShow] = React.useState(true)
  const [tit, setTit] = React.useState('Hello React!')

  return (
    <div className='App'>
      <h1>{tit}</h1>
      <input type="text" value={tit} onChange={(e) => {setTit(e.target.value)}} />
      <button onClick={() => setShow(!show)}>Toggle Child1</button>
      {
        show && <Child1 tit={tit} />
      }
      <Child2 />

    </div>
  )
}

export default App