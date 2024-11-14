import { forwardRef, useImperativeHandle, useState } from 'react'

const Child2 = (props) => {
  console.log('Child2 props:', props.count)
  return (
    <div>
      <h2>Child2</h2>
      <p>{props.count}</p>
      <button onClick={() => props.setCount(1)}>修改count</button>
    </div>
  )

}

export default Child2