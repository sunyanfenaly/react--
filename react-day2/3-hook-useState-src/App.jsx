import React, { useState, useRef, useEffect } from 'react'

const App = () => {
// react 在16.8版本之后引入了hooks的概念，可以让我们在函数组件中使用state。
// hooks 就是以 use 开头的函数，

// hook的规则：
// 只能在函数组件中和自定义hook中使用 hook
// 只能在函数最顶层调用 hook， 不能在 if 或者 for 循环中调用 hook

//  useState hook  定义函数组件的状态
// 接收一个初始值作为参数，返回一个数组，第一个元素是当前数据，第二个元素是更新数据的函数。
// 调用函数组件的更新状态时，会把传入的数据覆盖之前的数据。
// 更新变量是异步操作，无法立即获取到更新后的数据。
// 更新变量时可以传入一个函数，函数会接收之前的数据作为参数，返回新的数据。用函数的返回值覆盖之前的数据


const [count, setCount] = useState(0)  // 数字状态
const [arr, setArr] = useState([])  // 数组状态
const [name, setName] = useState('初始化')  // 字符串状态
const timer = useRef(null)
// 定时器
const start = (n) =>{
  timer.current = setInterval(() =>{
    // 无法获取到最新的 count 值，因为更新是异步的 count 始终是 start函数调用 App 组件的 count 值
    // setCount(count + 1)
    setCount(n => n + 1)
  },500)
}

// 停止定时器
const stop = () =>{
  clearInterval(timer.current)
}

// 销毁时清除定时器
useEffect(() =>{
  return () => {
    clearInterval(timer.current)
  }
})


  return (
    <div>
      <p>{name}</p>
      <input type="text" value={name} onChange={e => setName(e.target.value)} name="" id="" />

      <hr />


      {/* <button onClick={() => setCount(count - 1)}> 修改count- </button>
      <button>{count}</button>
      <button onClick={() => setCount(count + 1)}> 修改count + </button> */}
      <p>{count}</p>
      <button onClick={start}>定时器 + </button>
      <button onClick={stop}>停止定时器</button>
    <hr />

        <button onClick={() => {
          setArr([...arr, Math.random()])
        }}>添加随机数</button>
        <ul>
          {arr.map(item => <li key={item}>{item}</li> ) }
        </ul>

    </div>
  )
}

export default App