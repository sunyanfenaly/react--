import { useRef} from 'react'
import Child1 from './components/Child1'
import Child2 from './components/Child2'


const App = () => {

  const numRef = useRef(0)    // 函数组件
  const numRef2 = useRef(0)   // class类组件

  const childMethod  = () =>{
    // child1Ref.current.add(2)
    // console.log(child1Ref)

     numRef2.current.add(2)


    // 函数组件的调用方式
    numRef.current.setNum(numRef.current.num+ 2 )

  }
  
// useRef: ref对象的地址在整个生命周期内保持不变
// 1. 存数据，current改变不会触发组件渲染，可以存和组件渲染无关的数据，useState存的数据改变时会更新组件
// 2. 获取 dom 元素
// 3. 调用子组件的属性和方法



// 父组件调用函数子组件的数据和方法
// 1. 在父组件定义 ref 对象传给子组件
// 2. 在子组件中使用 forwardRef 接收父组件传入的 ref 对象
// 3. 在子组件中使用 useImperativeHandle 给 ref 赋值


  return (
    <div>
      <button onClick={childMethod}>修改child1的num</button>
      <Child1 ref={numRef}  />


      <hr />


      {/* ref 获取class组件的实例对象 */}
      {/* <Child1 ref={child1Ref} /> */}
      <Child2 ref={numRef2} />
      <button onClick={childMethod}>修改子组件的count</button>
    </div>
  )
}

export default App