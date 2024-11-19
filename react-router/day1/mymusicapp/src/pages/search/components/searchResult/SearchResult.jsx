import { useEffect, useState } from 'react'
import { useFetch } from '../../../../hooks/useFetch'
import style from './SearchResult.module.scss'
import { useNavigate } from 'react-router-dom'

const SearchResult = (props) => {
  const navigate = useNavigate()
  const [list, setList] = useState([])
  const [query, setQuery] = useState({
    limit: 50,
    offset: 0
  })
  const { data, loading, refresh } = useFetch({ url: '/search' })

  const onScroll = e => {
    const { scrollTop, clientHeight, scrollHeight } = e.target
    if (scrollTop + clientHeight + 50 >= scrollHeight && !loading && data.result.hasMore) {
      setQuery({
        ...query,
        offset: query.offset + query.limit
      })
    }
  }

  useEffect(() => {
    refresh({
      ...query,
      keywords: props.keywords
    })
  }, [query])
  

  useEffect(() => {
    const songs = data?.result.songs || []
    setList(prev => [...prev, ...songs])
    
  }, [data])

  const goDetail = id => {
    navigate(`/player?id=${id}`)
  }
  return (
    <div className={style.list} onScroll={onScroll}>
      {list.map(item =>
        <div className={style.item} key={item.id} onClick={() => goDetail(item.id)}>
          <h4>{item.name}</h4>
          <p>歌手: {item.artists.map(v => v.name).join('/')}</p>
          <p>专辑: {item.album.name}</p>
        </div>
      )}
      {loading && <div style={{ lineHeight: '30px', textAlign: 'center' }}>加载中。。。</div>}
      {!data?.result.hasMore && !loading && <div style={{ lineHeight: '30px', textAlign: 'center' }}>没有更多了</div>}
    </div>
  )
}

export default SearchResult