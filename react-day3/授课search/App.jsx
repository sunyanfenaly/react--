import { useState} from 'react'


import Loading from './components/loading/loading'
import SearchHeader from './components/searchHeader/SearchHeader'
import DefaultSearch from './components/defaultSearch/defaultSearch'
// import SearchResult from './components/searchResult/SearchResult'
import SearchSuggest from './components/searchSuggest/SearchSuggest'

const App = () => {

  const [ keywords, setKeywords ] = useState('')

  const onSelect =(keywords) =>{
    setKeywords(keywords)
  }

  
  return (
      <div className='app'>
          <SearchHeader  onChange={setKeywords} keywords={keywords} />

          {
              keywords 
            ? 
             <SearchSuggest keywords={keywords} onChange={onSelect} />  
            :   
              <DefaultSearch onChange={onSelect} keywords={keywords} />
          }
          {/*  */}
          {/* <SearchResult />*/}
          
      </div>
  )
}

export default App