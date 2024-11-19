import style from './DefaultSearch.module.scss'
import { useFetch } from '../../../../hooks/useFetch'
import classNames from 'classnames'

const DefaultSearch = (props) => {
  const { data } = useFetch({
    url: '/search/hot',
    immediate: true
  })

  return (
    <div className={style.wrap}>
      {props.historyList.length > 0 &&
        <>
          <h3>搜索历史</h3>
          <ul className={style.history}>
            {props.historyList.map(item =>
              <li key={item} onClick={() => props.onSearch(item)}>{item}</li>
            )}
          </ul>
        </>
      }
      <h3>热门搜索</h3>
      <ul className={style.hot}>
        {data?.result.hots.map((item, index) =>
          <li
            className={classNames({ [style.active]: index < 3 })}
            key={item.first}
            onClick={() => props.onSearch(item.first)}
          >
            <span>{index + 1}.</span>
            {item.first}
          </li>
        )}
      </ul>
    </div>
  )
}

export default DefaultSearch




