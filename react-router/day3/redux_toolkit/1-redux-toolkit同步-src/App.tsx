import {useSelector, useDispatch} from 'react-redux'

import Child1 from './components/Child1'
import Child2 from './components/Child2'


const App = () => {
  return (
    <div className='app'>
      <h2>Welcome to React Redux Toolkit</h2>
      <Child1 />
      <Child2 />
    </div>
  )
}

export default App