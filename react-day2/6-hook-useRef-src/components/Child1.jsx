import React, {forwardRef, useImperativeHandle, useState} from 'react'

const Child1 = (props, ref) => {
  const [num, setNum] = useState(0)

  // console.log('Child1 props', props)

  // 给父组件传入的ref对象赋值
  useImperativeHandle(ref, () => {
    // return 的数据会添加到 ref.current 中
    return {
      num,
      setNum
    }
  }, [num])

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={() => setNum(num + 1)}>点击修改num</button>
      
    </div>
  )
}

export default forwardRef(Child1)