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
  padding-bottom: 4px;
  display: ${(props) => (props.hidden ? 'none' : 'block')};
`

const ResultHeadline = styled.h2`
  color: #28302d;
  font-weight: 500;
  font-size: 26px;
`

const ResultCounter = styled.p`
  position: fixed;
  top: 125px;
  right: 40px;
  width: 50px;
  padding: 4px 4px;
  border-radius: 10px;
  border: 2px solid #596f72;
  background-color: rgba(194, 239, 245, 0.9);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #28302d;
`

const Grid = styled.div`
  padding-top: 15px;
  display: grid;
  gap: 15px;
`
