import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components'
import CharacterCard from './CharacterCard'
import SearchResults from './SearchResults'
import { getDataByName } from './services/getData'
import { useState } from 'react'


function App() {
  const [results, setResults] = useState[]


function handleSearch () {
  
}


  return (
    <AppWrapper>
      <Header />
      <SearchResults hidden="true" />
      <CharacterCard hidden="true" />
      <Footer onSearchRequest={handleSearch}/>
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  padding: 120px 20px 80px 20px;
`

export default App
