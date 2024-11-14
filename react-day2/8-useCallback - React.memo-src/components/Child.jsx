import React from 'react'

const Child = (props) => {
    const [num, setNum] = React.useState(0)

    console.log('Child组件重新渲染了')


  return (
    <div>
        <h2>这是子组件</h2>

        <p>当前的计算数字为： {num} </p>
        <button onClick={() => setNum(num + 1)}>点击增加数字</button>

        <hr />
        <p>父组件传的参数ARR：{props.arr}</p>
    </div>
  )
}

export default React.memo(Child)