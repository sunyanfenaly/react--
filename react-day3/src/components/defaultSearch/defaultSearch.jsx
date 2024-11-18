import React, { useRef} from 'react'
import { useFetch  } from '../../hooks/useFetch'

import style from './defaultSearch.module.scss'

const defaultSearch = (props) => {

const historyList = JSON.parse(localStorage.getItem('historyList')) || []

  const { data } = useFetch({
    url:'/search/hot',
    immediate: true
  })


  const delHistoryList = () =>{
    props.setHistoryList('[]')
  }
  console.log(props)

  return (
    <div className={style.defaultSearch}>
        <h3>搜索历史   

          <svg t="1731597158112"  onClick={() =>{ props.onChange() }} className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4307" width="20" height="20"><path d="M1024 146.285714h-219.428571V0H219.428571v146.285714H0v73.142857h73.142857v658.285715a146.285714 146.285714 0 0 0 146.285714 146.285714h585.142858a146.285714 146.285714 0 0 0 146.285714-146.285714V219.428571h73.142857zM292.571429 73.142857h438.857142v73.142857H292.571429z m585.142857 804.571429a73.142857 73.142857 0 0 1-73.142857 73.142857H219.428571a73.142857 73.142857 0 0 1-73.142857-73.142857V219.428571h731.428572z" fill="#42434B" p-id="4308"></path><path d="M365.714286 365.714286h73.142857v438.857143H365.714286zM585.142857 365.714286h73.142857v438.857143H585.142857z" fill="#42434B" p-id="4309"></path></svg>

        </h3>
        <ul className={style.historyList}>
            {
                historyList.map((item,ind) =>{
                  return <li key={ind}>{item} <span>X</span></li>
                })
            }
        </ul>
        <h3 className={style.hotTit}>热门搜索</h3>
        <ul className={style.hotList}>
            {
                data.result?.hots?.map((item, index) =>{
                  return <li className={style.active} key={index} > 
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