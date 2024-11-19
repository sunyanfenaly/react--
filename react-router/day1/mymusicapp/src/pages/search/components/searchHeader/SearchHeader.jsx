import { useEffect, useState } from 'react'
import style from './SearchHeader.module.scss'

const SearchHeader = (props) => {
  const [keywords, setKeywords] = useState(props.value || '')

  useEffect(() => {
    if (props.value !== keywords) {
      setKeywords(props.value)
    }
  }, [props.value])

  return (
    <div className={style.header}>
      <input type="text" placeholder='搜索歌手/歌曲' value={keywords} onChange={e => {
        setKeywords(e.target.value)
        props.onChange(e.target.value)
      }} />
      {keywords && <span onClick={() => {
        setKeywords('')
        props.onChange('')
      }}>取消</span>}
    </div>
  )
}

export default SearchHeader