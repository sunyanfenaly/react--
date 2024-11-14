import React, { useEffect, useState, useRef } from 'react'



  // componentWilUnmount 销毁组件时执行
  // 子组件销毁时，会触发父组件的componentWilUnmount
  const Child = () =>{
    
    const timer = useRef(null)
    const [n, setN] = useState(0)
    useEffect(() => {

      timer.current = setInterval(() =>{
        console.log('定时器')
        setN(n => n + 1)
      }, 1000)

      return () => {
        console.log('Child useEffect, 子组件销毁之前执行') 
        clearInterval(timer.current)
      }
    }, [])


    return (
      <div style={{backgroundColor: 'yellow'}}>
        <p>{n}</p>
      </div>
    )
  }



const App = () => {

  // useEffect 处理组件中的副作用（例如请求接口，创建定时器，获取dom） 

  // 1、可以实现类似于生命周期的函数，
  //     callback 是一个函数，会在组件渲染完成后执行
  // 2、 如果不传入第二个参数，则 只要有state 或者 props发生变化，useEffect都会执行.   类似于componentDidUpdate
  // 3、 useEffect(callback, []) 第二个参数是一个空数组，表示 useEffect 只在组件挂载时执行一次，而不会在组件更新时执行   类似于componentDidMount
  // 4、 useEffect(callback, [依赖项数组])
  // 5、 依赖项传入具体的变量，callback 会在变量变化时执行, 类似于componentDidUpdate
  // 6、 callback return 的函数 
  // 6-1、  如果有依赖项，依赖项改变的时执行上一次return的函数
  // 6-2、  会在组件销毁时执行，类似于componentWilUnmount


  const [count, setCount] = useState(0)
  const [ str, setStr ] = useState('')
  const isFirst = useRef(true)
  // componentDidMount
  useEffect(() => {
    console.log('useEffect, 组件挂载完成', 'component did mount')
  }, [])

  // componentDidUpdate 和 componentDidMount 
  useEffect(() => {
    // 判断是否是第一次执行，如果是第一次执行，则不执行
    if(isFirst.current){
      isFirst.current = false
    }else{
      console.log('useEffect, 组件更新完成', 'component did update')

    }
  })

  // componentDidUpdate 依赖项传入具体的变量，callback 会在变量变化时执行, 类似于componentDidUpdate
  // useEffect(() => {
  //   return () => {
  //     console.log('useEffect, componentDidUpdate')
  //   }
  // }, [count])




  // useEffect(() => {

  //   return () => {
  //     console.log('useEffect, componentWilUnmount')
  //   }
  // }, [])


  return (

    <div>
      <h1>Hello React</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <hr/>
      <input type="text" value={str} onChange={(e) => setStr(e.target.value)}/>
      <hr/>
      
      { count < 10 && <Child />}


    </div>
  )
}

export default App