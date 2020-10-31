import styled from 'styled-components/macro'

export default function SearchResults({
  hidden,
  children,
  count,
  currentCount,
}) {
  return (
    <ResultWrapper hidden={hidden}>
      <h2>
        Your search results: {currentCount}/{count}
      </h2>
      <Grid>{children}</Grid>
    </ResultWrapper>
  )
}

const ResultWrapper = styled.section`
  overflow-y: auto;
  height: 100%;
  display: ${(props) => (props.hidden ? 'none' : 'block')};

  h2 {
    color: #28302d;
    font-weight: 500;
    font-size: 26px;
  }
`

const Grid = styled.div`
  padding-top: 15px;
  display: grid;
  gap: 15px;
`
