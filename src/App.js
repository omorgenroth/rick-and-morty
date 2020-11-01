import { useState } from 'react'
import styled from 'styled-components'
import Button from './Button'
import CharacterCard from './CharacterCard'
import ErrorMessage from './ErrorMessage'
import Footer from './Footer'
import Header from './Header'
import IntroCard from './IntroCard'
import SearchResultItem from './SearchResultItem'
import SearchResults from './SearchResults'
import { getDataByName, getDataByUrl, getDataById } from './services/getData'

function App() {
  const [results, setResults] = useState([])
  const [character, setCharacter] = useState([])
  const [info, setInfo] = useState([])
  const [isResultHidden, setIsResultHidden] = useState(true)
  const [isCardHidden, setIsCardHidden] = useState(true)
  const [isButtonHidden, setIsButtonHidden] = useState(true)
  const [isIntroHidden, setIsIntroHidden] = useState(false)
  const [isError, setIsError] = useState(false)

  function displayResults(input) {
    getDataByName(input).then((data) => {
      if (data === 'error') {
        setIsError(true)
      } else {
        setResults(data.results)
        setInfo(data.info)
        scrollUp()
        setIsResultHidden(false)
        setIsCardHidden(true)
        setIsError(false)
        setIsIntroHidden(true)
      }
    })
  }

  function displayCharacterCard(url) {
    getDataByUrl(url).then((data) => setCharacter(data))
    setIsCardHidden(false)
    setIsResultHidden(true)
    setIsButtonHidden(false)
    scrollUp()
  }

  function navigateBack() {
    setIsCardHidden(true)
    setIsResultHidden(false)
  }

  function closeError() {
    setIsError(false)
  }

  function addMoreResults(url) {
    getDataByUrl(url).then((data) => {
      setResults(results.concat(data.results))
      setInfo(data.info)
    })
    setIsResultHidden(false)
    setIsCardHidden(true)
  }

  function displayRandomCharacter() {
    const randomId = Math.round(1 + Math.random() * 671)
    getDataById(randomId).then((data) => setCharacter(data))
    setIsCardHidden(false)
    setIsResultHidden(true)
    setIsButtonHidden(true)
    setIsIntroHidden(true)
  }

  function scrollUp() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  return (
    <AppWrapper>
      <IntroCard hidden={isIntroHidden} />
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
          onClick={() => addMoreResults(info.next)}
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
        status={character.status}
        loc={character.location}
        hidden={isCardHidden}
        onClick={navigateBack}
        btnhidden={isButtonHidden}
      />
      <Footer
        onSearchRequest={displayResults}
        showErrorMessage={() => setIsError(true)}
        onClick={displayRandomCharacter}
      />
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  padding: 120px 20px 80px 20px;
`

export default App
