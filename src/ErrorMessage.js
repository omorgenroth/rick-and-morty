import styled from 'styled-components/macro'
import ErrorRick from './assets/error_rick.png'
import Button from './Button'

export default function ErrorMessage({ hidden, onClick }) {
  return (
    <ErrorWrapper hidden={hidden}>
      <Message>
        INVALID NAME... <br />
        LOSER.
      </Message>
      <ErrorRickImg src={ErrorRick} />
      <ErrorButton onClick={onClick}>Back</ErrorButton>
    </ErrorWrapper>
  )
}

const ErrorWrapper = styled.div`
  z-index: 50;
  display: ${(props) => (props.hidden ? 'none' : 'grid')};
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(5, 1fr);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(101, 198, 218, 0.9);
  height: 100vh;
  padding: 0 20px;
`
const ErrorRickImg = styled.img`
  grid-column: 2/3;
  grid-row: 2/6;
  width: 100%;
  align-self: end;
`
const Message = styled.h3`
  grid-column: 1/3;
  grid-row: 4/5;
  color: #cc0000;
  font-weight: 500;
  font-size: 32px;
  line-height: 1.25;
`

const ErrorButton = styled(Button)`
  grid-column: 1/2;
  grid-row: 5/6;
  justify-self: stretch;
  align-self: start;
`
