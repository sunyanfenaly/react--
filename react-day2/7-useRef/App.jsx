import React, {useRef, useState, useEffect} from 'react'

const App = () => {

  const [ count, setCount ] = useState(0)
  const isFirst = useRef(true)
  const timer = useRef(null)


  const start = () => {
    timer.current = setInterval(() => {
      setCount(n => n + 1)
    }, 1000)
  }

  const stop = () => {
    clearInterval(timer.current)
  }


  // 使用 useRef 和 useEffect 模拟componentDidUpdate
  useEffect(() => {
    if(isFirst.current){
      isFirst.current = false // 第一次渲染后设置为false
    }else{
      console.log('count changed:', count)
    }
  }, [count])




  return (
    <div>
      <p>count: {count}</p>
      <button onClick={start}>开始定时器</button>
      <button onClick={stop}>停止定时器</button>
    </div>
  )
}

export default App