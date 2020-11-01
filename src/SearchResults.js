import styled from 'styled-components/macro'

export default function SearchResults({
  hidden,
  children,
  count,
  currentCount,
}) {
  return (
    <ResultWrapper hidden={hidden}>
      <ResultHeadline>Your search results:</ResultHeadline>
      <ResultCounter>
        {currentCount}/{count}
      </ResultCounter>
      <Grid>{children}</Grid>
    </ResultWrapper>
  )
}

const ResultWrapper = styled.section`
  display: ${(props) => (props.hidden ? 'none' : 'block')};
  padding-bottom: 4px;
`

const ResultHeadline = styled.h2`
  color: rgb(40, 48, 45);
  font-size: 26px;
  font-weight: 500;
`

const ResultCounter = styled.p`
  background-color: rgba(194, 239, 245, 0.9);
  border-radius: 10px;
  border: 2px solid rgb(89, 111, 114);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  color: rgb(40, 48, 45);
  font-size: 14px;
  font-weight: 500;
  padding: 4px 4px;
  position: fixed;
  right: 40px;
  text-align: center;
  top: 125px;
  width: 50px;
`

const Grid = styled.div`
  display: grid;
  gap: 15px;
  padding-top: 15px;
`
