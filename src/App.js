import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components'
import CharacterCard from './CharacterCard'
import SearchResults from './SearchResults'

function App() {
  return (
    <AppWrapper>
      <Header />
      <SearchResults />
      <CharacterCard hidden="false" />
      <Footer />
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  padding: 120px 20px 80px 20px;
`

export default App
