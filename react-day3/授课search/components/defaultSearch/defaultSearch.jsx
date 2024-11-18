import React, { useRef} from 'react'
import { useFetch  } from '../../hooks/useFetch'

import style from './defaultSearch.module.scss'

const defaultSearch = (props) => {

  const historyList = useRef(localStorage.getItem('historyList')|| [] )
  console.log(historyList)

  console.log(historyList)
  const { data } = useFetch({
    url:'/search/hot',
    immediate: true
  })

  console.log(props)

  return (
    <div className={style.defaultSearch}>
        <h3>搜索历史</h3>
        <ul className={style.historyList}>
            <li>React <span>X</span></li>
            <li>Vue <span>X</span></li>
            <li>Angular <span>X</span></li>
             <li>React <span>X</span></li>
            <li>Vue <span>X</span></li>
            <li>Angular <span>X</span></li>
        </ul>
        <h3 className={style.hotTit}>热门搜索</h3>
        <ul className={style.hotList}>
            {
                data.result?.hots?.map((item, index) =>{
                  return <li className={style.active} key={index} onClick={() => props.onChange(item.first)}> 
                          { index < 3 ? <b>{index < 3 &&'0' + (index + 1) } .</b> : <span style={{fontWeight: 'bolder'}}>{index < 9 ? '0' + (index + 1) : (index + 1)}.</span>}
                    {item.first}
                  </li>
                })
            }
        </ul>
    </div>
  ) 
}

export default defaultSearch