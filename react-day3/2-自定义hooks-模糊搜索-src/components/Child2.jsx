import React from 'react'
import {useFetch } from '../hooks/useFetch'
import Loading  from './Loading';

const Child2 = () => {

    const [keywords, setKeywords] = React.useState('周杰伦');
    const timer = React.useRef(null)

    const { getFetchData, loading, data } = useFetch({
        url: 'https://zyxcl.xyz/music/api/search',
        initParams: {
          keywords: keywords
        },
        immediate: true
    })  

    const onChange = (e) =>{
        if(timer.current){
          clearTimeout(timer.current)
        }

        timer.current = setTimeout(() => {
          getFetchData({ keywords: e.target.value })

          timer.current = null
        }, 1000)


      
    }
    


  return (
    <div>
        <h3>Child2</h3>
        <input type="text" value={keywords} onChange={ onChange } /> 
        <button onClick={() => getFetchData({ keywords})}>获取数据</button>

        {
          loading? <Loading /> : <ul>
            {
              data.result?.songs.map(item =>{
                return <li key={item.id} style={{marginBottom: '10px'}}>{item.name}</li>
              })
            }
          </ul>
        }
    </div>
  )
}

export default Child2