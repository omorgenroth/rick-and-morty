import styled from 'styled-components/macro'

export default function SearchResults({
  hidden,
  children,
  count,
  currentCount,
}) {
  return (
    <ResultWrapper hidden={hidden}>
      <ResultCounter>
        Your search results:{' '}
        <p>
          {currentCount}/{count}
        </p>
      </ResultCounter>
      <Grid>{children}</Grid>
    </ResultWrapper>
  )
}

const ResultWrapper = styled.section`
  overflow-y: auto;
  padding-bottom: 4px;
  height: 100%;
  display: ${(props) => (props.hidden ? 'none' : 'block')};
`

const Grid = styled.div`
  padding-top: 15px;
  display: grid;
  gap: 15px;
`

const ResultCounter = styled.h2`
  color: #28302d;
  font-weight: 500;
  font-size: 26px;

  p {
    font-size: 18px;
  }
`
