import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components'
import CharacterCard from './CharacterCard'

function App() {
  return (
    <AppWrapper>
      <Header />
      <CharacterCard />
      <Footer />
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  padding: 0 20px 20px 20px;
  position: relative;
  height: 100vh;
`

export default App
