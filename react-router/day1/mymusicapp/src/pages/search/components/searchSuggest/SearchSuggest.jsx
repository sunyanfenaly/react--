import { useEffect, useRef } from 'react'
import { useFetch } from '../../../../hooks/useFetch'
import style from './SearchSuggest.module.scss'

const SearchSuggest = (props) => {

  const { data, loading, refresh } = useFetch({
    url: '/search/suggest'
  })
  const timer = useRef(null)

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      refresh({
        keywords: props.keywords,
        type: 'mobile'
      })
      timer.current = null
    }, 300)
  }, [props.keywords])

  return (
    <div className={style.suggest}>
      <p>搜索建议: {props.keywords}</p>
      {loading ?
        <div>正在搜索...</div>
      :
        <ul>
          {data?.result.allMatch ?
            data?.result.allMatch?.map(item =>
              <li key={item.keyword} onClick={() => props.onSearch(item.keyword)}>{item.keyword}</li>
            )
          : '暂无数据'}
        </ul>
      }
      
    </div>
  )
}

export default SearchSuggest