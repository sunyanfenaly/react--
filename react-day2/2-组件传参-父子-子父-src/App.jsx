import { useState} from 'react'
import Child1 from './components/Child1'
import Child2 from './components/Child2'

const App = () => {
const [count, setCount] = useState(0)


  return (
    <div>
      <h1>Hello React!</h1>
      <Child1 count={count} setCount={(e) => setCount(e + count)} />
        <hr />
      <Child2 count={count} setCount={(e) => setCount(e + count)} />
    </div>
  )
}

export default App