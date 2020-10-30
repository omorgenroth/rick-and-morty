import { useState } from 'react'
import { getDataByName, getCharacter } from './services/getData'
import styled from 'styled-components'
import CharacterCard from './CharacterCard'
import Footer from './Footer'
import Header from './Header'
import SearchResults from './SearchResults'

function App() {
  const [results, setResults] = useState([])
  const [character, setCharacter] = useState([])
  const [isResultHidden, setIsResultHidden] = useState(true)
  const [isCardHidden, setIsCardHidden] = useState(true)

  function handleSearch(input) {
    getDataByName(input)
      .then((data) => setResults(data.results))
      .catch((error) => console.log(error.message))
    setIsResultHidden(false)
    setIsCardHidden(true)
  }

  function handleCharacter(url) {
    getCharacter(url).then((data) => setCharacter(data))
    setIsCardHidden(false)
    setIsResultHidden(true)
  }

  return (
    <AppWrapper>
      <Header />
      <SearchResults
        results={results}
        getCharacter={handleCharacter}
        hidden={isResultHidden}
      />
      <CharacterCard
        name={character.name}
        gender={character.gender}
        species={character.species}
        url={character.image}
        hidden={isCardHidden}
      />
      <Footer onSearchRequest={handleSearch} />
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  padding: 120px 20px 80px 20px;
`

export default App
