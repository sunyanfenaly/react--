import React from 'react'
import useFetch from '../../hooks/useFetch'
import { useUpdate } from '../../hooks/useUpdate' 
import style from './searchSuggest.module.scss'
const SearchSuggest = (props) => {

 

  const { data, loading, getFetchData } = useFetch({
    url: '/search/suggest'
  })

  useUpdate(() =>{
    getFetchData({
      keywords: props.keywords,
      type: 'mobile'
    })
  }, [props.keywords])

  return (
    <div className={style.suggest}>
      <h4>搜索建议： <span>{props.keywords}</span></h4>
      <ul className={style.suggestList}>
          { 
            data.result?.allMatch.map((item,index) => <li key={item.keyword} onClick={() =>{ props.onChange(item.keyword)}}>

               { index < 3 ? <b>{index < 3 &&'0' + (index + 1) } .</b> : <span style={{fontWeight: 'bolder'}}>{index < 9 ? '0' + (index + 1) : (index + 1)}.</span>}
               {item.keyword}
            </li>)
          }
      </ul>
    </div>
  )
}

export default SearchSuggest