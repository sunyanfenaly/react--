import React, { useState, useEffect } from 'react'
import store from '../store'


const Child1 = () => {
  const [tit, setTit] = useState('Child1组件')
  const [count, setCount] = useState(store.getState().count)

  useEffect(() =>{
    const un = store.subscribe(() =>{
      console.log('store.subscribe')
      setCount(store.getState().count)
    })
    // 组件销毁时候，取消订阅
    return () => {
      un()
    }
  })

  return (
    <div className='box'>
      <h2>{tit}</h2>
      <input type="text" value={tit} onChange={e => setTit(e.target.value)} />
      <h3>{count}</h3>
      <button onClick={() => {
        store.dispatch({
          type:'changeCount'
        })
      }}>改变count ++ </button>
    </div>
  )
}

export default Child1