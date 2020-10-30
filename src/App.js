import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components'

function App() {
  return (
    <AppWrapper>
      <Header />
      <Footer />
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  padding: 20px;
  position: relative;
  height: 100vh;
`

export default App
