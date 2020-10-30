import { useEffect, useState } from 'react'
import { getDataByName, getCharacter } from './services/getData'
import styled from 'styled-components'
import CharacterCard from './CharacterCard'
import Footer from './Footer'
import Header from './Header'
import SearchResults from './SearchResults'

function App() {
  const [results, setResults] = useState([])

  const [character, setCharacter] = useState([])

  function handleSearch(input) {
    getDataByName(input)
      .then((data) => setResults(data.results))
      .catch((error) => console.log(error.message))
  }

  function handleCharacter(url) {
    getCharacter(url).then((data) => setCharacter(data))
  }

  const blaBlubb = character.location
  console.log(blaBlubb.name)

  return (
    <AppWrapper>
      <Header />
      <SearchResults
        hidden={false}
        results={results}
        getCharacter={handleCharacter}
      />
      <CharacterCard
        name={character.name}
        gender={character.gender}
        species={character.species}
        url={character.image}
        //location={character.name}
      />
      <Footer onSearchRequest={handleSearch} />
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  padding: 120px 20px 80px 20px;
`

export default App
