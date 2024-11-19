import { useState } from 'react'
import Child1 from './components/Child1'
import Child2 from './components/Child2'






const App = () => {
  const [tit, setTit] = useState('hello')
  
  

  return (
    <div className='App'>
      <h4>{tit}</h4>
      <input type="text" value={tit} onChange={e=> setTit(e.target.value)} />
      {
        tit === 'hello' && <Child1 />
      }
      <Child2 />
    </div>
  )
}

export default App