import { useEffect, useState } from 'react'
import { getDataByName } from './services/getData'
import styled from 'styled-components'
import CharacterCard from './CharacterCard'
import Footer from './Footer'
import Header from './Header'
import SearchResults from './SearchResults'

function App() {
  const [results, setResults] = useState([])

  function handleSearch(input) {
    getDataByName(input).then((data) => setResults(data.results))
  }

  return (
    <AppWrapper>
      <Header />
      <SearchResults hidden={false} results={results} />
      <CharacterCard hidden={true} />
      <Footer onSearchRequest={handleSearch} />
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  padding: 120px 20px 80px 20px;
`

export default App
