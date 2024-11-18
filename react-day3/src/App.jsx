import { useState, useRef, useEffect } from 'react'


import Loading from './components/loading/loading'
import SearchHeader from './components/searchHeader/SearchHeader'
import DefaultSearch from './components/defaultSearch/defaultSearch'
import SearchResult from './components/searchResult/SearchResult'
import SearchSuggest from './components/searchSuggest/SearchSuggest'
import { useUpdate } from './hooks/useUpdate'

const App = () => {

  const [ historyList, setHistoryList  ] = useState(JSON.parse(localStorage.getItem('historyList'))|| [] )
  const [ keywords, setKeywords ] = useState('')
  const [type , setType  ] = useState(0)
  const onSelect =(keywords) =>{
    setKeywords(keywords)
    localStorage.setItem('historyList', JSON.stringify([...historyList, keywords]))
  }

  const delHistoryList = () =>{
    setHistoryList([])
    localStorage.setItem('historyList', JSON.stringify(historyList))
  }

  const startSearch = () =>{
      setType(2)

  }

  // useUpdate(() =>{
  //      historyList.current.push(keywords)
  //     localStorage.setItem('historyList', JSON.stringify(historyList.current))
  // }, [historyList.current])

  const renderMain = () =>{
     switch(type){
       case 0:
        return <DefaultSearch historyList={historyList} onChange= { delHistoryList } />
        case 1:
        return <SearchSuggest keywords={keywords} onChange={onSelect}  /> 
        case 2:
        return <SearchResult />
     }
  }
  
  return (
      <div className='app'>
          <SearchHeader  onChange={keywords =>{
            if(keywords === ''){
              setType(0)
            }else{
              setType(1)
            }
            setKeywords(keywords)
          }} keywords={keywords} />

          {renderMain()}
          
      </div>
  )
}

export default App