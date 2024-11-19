import { useEffect, useState } from 'react'
import SearchHeader from './components/searchHeader/SearchHeader'
import DefaultSearch from './components/defaultSearch/DefaultSearch'
import SearchResult from './components/searchResult/SearchResult'
import SearchSuggest from './components/searchSuggest/SearchSuggest'


import style from './Seatch.module.scss'

const Search = () => {
  const [keywords, setKeywords] = useState('')
  const [type, setType] = useState(0)
  const [historyList, setHistoryList] = useState(JSON.parse(localStorage.getItem('historyList')) || [])

  const render = () => {
    console.log(type, 'type')
    switch(type) {
      case 0:
        return <DefaultSearch historyList={historyList} onSearch={startSearch} />
      case 1:
        return <SearchSuggest keywords={keywords} onSearch={startSearch} />
      case 2:
        return <SearchResult keywords={keywords} />
    }
  }

  const startSearch = (keyword) => {
    setKeywords(keyword)
    setType(2)
    addHistory(keyword)
  }

  const addHistory = (keyword) => {
    let newHistoryList = [...historyList]
    const index = newHistoryList.indexOf(keyword)
    if (index > -1) {
      newHistoryList.splice(index, 1)
    }
    newHistoryList.unshift(keyword)
    if (newHistoryList.length > 10) {
      newHistoryList = newHistoryList.slice(0, 10)
    }
    setHistoryList(newHistoryList)
  }

  useEffect(() => {
    localStorage.setItem('historyList', JSON.stringify(historyList))
  }, [historyList])

  return (
    <div className={style.page}>
      <SearchHeader value={keywords} onChange={keywords => {
        if (keywords.length === 0) {
          setType(0)
        } else {
          setType(1)
        }
        setKeywords(keywords)
      }} />
      <main>
        {render()}
      </main>
    </div>
  )
}

export default Search