import React, { useEffect, useState, useRef } from 'react'
import { getBanners, type bannerItem} from './services'
const App = () => {
  
  const [count, setCount] = useState(0)
  const [tit, setTit] = useState('hello')
  const h3Ref = useRef<HTMLInputElement>(null)
  const [banners, setBanners] = useState<bannerItem[]>([])
  
  
  //获取banner数据
  useEffect(() =>{
    getBanners().then(res =>{
      setBanners(res.data.banners)
    })
  }, [])


  // 改变标题
  const changeTit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTit(e.target.value)
  }
  // 获取h3dom元素
  const getH3Dom = () => {
    console.log(h3Ref.current?.innerHTML)
  }

  return (
    <div className='App'>
      这是app页面
      <h3 ref={h3Ref}>标题： {tit}</h3>
      <input type="text" value={tit} onChange={changeTit} />
      <button onClick={getH3Dom}>获取h3dom元素</button>
      <p>count:{count}</p>
      <button onClick={() => setCount(count + 1)}>点击count + 1</button>

      {
        banners.map((item, index) =>{
          return <div className='bannerswrapper' key={index}>
            <img src={item.imageUrl} alt={item.typeTitle} />
            <h2>{item.typeTitle}</h2>
          </div>
        })
      }

    </div>
  )
}

export default App