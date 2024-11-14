import React, {useState, useCallback, useMemo} from 'react'
import Child from './components/Child'
const App = () => {

  const [tit, setTit] = useState('Hello React')
  const [ arr, setArr ] = React.useState([1, 2, 3])

  // 1. useCallback(callback, [依赖项])  返回一个缓存的函数
  // 2. 如果依赖项改变了重新创建函数，没改变从缓存中读函数
  // 使用场景：可以配合 React.memo 高阶组件使用优化子组件的渲染性能，避免子组件不必要的更新
  //        当子组件使用了React.memo进行优化时，父组件给子组件传入的函数 需要使用 useCallback 进行缓存，否则子组件的React.memo优化失效
  // 备注：可以使用 useMemo 实现 useCallback

  // const handle = useCallback(() => {
  //   console.log('handle')
  //   setArr([...arr, arr.length + 1])
  // }, [arr])


  const handle = () => {
    console.log('handle')
    return () =>{
      setArr([...arr, arr.length + 1])
      setArr([...arr, arr.length + 1])
    }
  }

  return (
    <div>
      <h1>{tit}</h1>
      <button onClick={handle}>Add</button>
      <input type="text" value={tit} onChange={(e) => setTit(e.target.value)} />

      < Child arr={arr} setArr={setArr}  />
      <ul>
        {arr.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  )
}

export default App