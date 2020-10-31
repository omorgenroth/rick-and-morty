import { useState } from 'react'
import styled from 'styled-components'
import Button from './Button'
import CharacterCard from './CharacterCard'
import ErrorMessage from './ErrorMessage'
import Footer from './Footer'
import Header from './Header'
import SearchResultItem from './SearchResultItem'
import SearchResults from './SearchResults'
import { getDataByName, getDataByUrl } from './services/getData'

function App() {
  const [results, setResults] = useState([])
  const [character, setCharacter] = useState([])
  const [info, setInfo] = useState([])
  const [isResultHidden, setIsResultHidden] = useState(true)
  const [isCardHidden, setIsCardHidden] = useState(true)
  const [isError, setIsError] = useState(false)

  function displayResults(input) {
    getDataByName(input).then((data) => {
      if (data === 'error') {
        setIsError(true)
      } else {
        setResults(data.results)
        setInfo(data.info)
        setIsResultHidden(false)
        setIsCardHidden(true)
        setIsError(false)
      }
    })
  }

  function displayCharacterCard(url) {
    getDataByUrl(url).then((data) => setCharacter(data))
    setIsCardHidden(false)
    setIsResultHidden(true)
  }

  function navigateBack() {
    setIsCardHidden(true)
    setIsResultHidden(false)
  }

  function closeError() {
    setIsError(false)
  }

  function showMoreResults(url) {
    getDataByUrl(url).then((data) => {
      setResults(results.concat(data.results))
      setInfo(data.info)
    })
    setIsResultHidden(false)
    setIsCardHidden(true)
  }

  return (
    <AppWrapper>
      <Header />
      <ErrorMessage hidden={!isError} onClick={closeError} />
      <SearchResults
        count={info.count}
        currentCount={results.length}
        hidden={isResultHidden}
      >
        {results.map(({ id, name, image, url }) => (
          <SearchResultItem
            onSelect={displayCharacterCard}
            key={id}
            name={name}
            image={image}
            url={url}
          />
        ))}
        <Button
          onClick={() => showMoreResults(info.next)}
          hidden={info.next ? false : true}
        >
          Show more...
        </Button>
      </SearchResults>
      <CharacterCard
        name={character.name}
        gender={character.gender}
        species={character.species}
        url={character.image}
        hidden={isCardHidden}
        onClick={navigateBack}
      />
      <Footer onSearchRequest={displayResults} />
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  padding: 120px 20px 80px 20px;
`

export default App
