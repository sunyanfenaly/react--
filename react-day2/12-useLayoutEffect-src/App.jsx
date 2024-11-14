import React, { useEffect, useLayoutEffect } from 'react'

const App = () => {
  const [tit, setTit] = React.useState('Hello World')

  // useEffect(() =>{
  //     // 页面渲染完成后执行此函数
  //     if(tit === 'Hello ReactReactReactReact'){
  //       setTit('Hello World')
  //     }
  // }, [tit])

  useLayoutEffect(() =>{
    // dom 更新之后，浏览器绘制之前执行
    if(tit === 'Hello ReactReactReactReact'){
        setTit('Hello')
    }
  }, [tit])
  
  return (
    <div>
      <h1>{tit}</h1>

      <hr />
      <button onClick={() => setTit('Hello ReactReactReactReact')}>Change Title</button>
    </div>
  )
}

export default App