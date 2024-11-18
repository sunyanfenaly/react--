import React, {useState} from 'react'
import { useUpdate } from '../../hooks/useUpdate'
import style from './searchHeader.module.scss'


const SearchHeader = (props) => {
  const [keywords, setKeywords] = useState('')

  useUpdate(() =>{
    props.onChange(keywords)
  }, [keywords])

  useUpdate(() =>{
    setKeywords(props.keywords)
  }, [props.keywords])
  
  console.log(props)
  return (
    <div className={style.searchHeader}>
      <input type="text" className={style.searchInput} value={keywords} onChange={(e) => setKeywords(e.target.value)} />
      {
        keywords 
      &&
        <span className={style.cancel} onClick={() => setKeywords('')}>取消</span> 
      
      }
    </div>
  )
}

export default SearchHeader