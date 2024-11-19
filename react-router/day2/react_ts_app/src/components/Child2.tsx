import React from 'react'

interface Props {
  tit: string,
  setTit: (newTit: string) => void
}


const Child2 = (props: Props) => {
  return (
    <div className='box'>
      <h2>我是父组件传递过来的标题：{props.tit}</h2>
      <button onClick={() => props.setTit('我是子组件改变的标题')}>改变tit </button>
    </div>
  )
}

export default Child2