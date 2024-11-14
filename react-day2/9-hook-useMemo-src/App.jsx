import React, { useState, useMemo } from 'react'

const App2 = () => {
    const [title, setTitle] = useState('标题')
    const [count, setCount] = useState(0)
    const [list, setList] = useState([])
    const [isOdd, setIsOdd] = useState(true)


    // useMemo
    // 1、useMemo 必须要有返回值
    // 3、useMemo 第二个参数是一个数组，里面是依赖的变量
    // 4、useMemo 会把返回的结果给存起来, 下次使用的时候直接从缓存中拿
    // 5、useMemo 不会重新计算，只有当依赖的变量发生变化的时候才会重新计算



    const filterList = useMemo(() =>{
        
        // console.log('filterList', isOdd, list)
        if(isOdd){
            return list.filter(item => item % 2 === 1)
        }else{
            return list.filter(item => item % 2 === 0)
        }
    }, [list, isOdd])

    console.log('filterList', filterList)
  return (
    <div>
        <h1>{title}</h1>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />  
        <hr />

        <button onClick={() => setList([...list, list.length + 1])}>点击</button>
        
        <ul>
            {list.map((item, index) =>{
                return <li key={index}>{item}</li>  
            })}
        </ul>
        <hr />
        <button onClick={() => setIsOdd(!isOdd)}>切换</button>
        <h2>{isOdd ? '偶数' : '奇数'}</h2>
        <ul>
            {filterList.map((item, index) =>{
                return <li key={index}>{item}</li>  
            })}
        </ul>
    </div>
  )
}

export default App2     