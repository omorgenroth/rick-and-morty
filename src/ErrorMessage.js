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
  background-color: rgba(101, 198, 218, 0.9);
  display: ${(props) => (props.hidden ? 'none' : 'grid')};
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(6, 1fr);
  height: 100vh;
  left: 0;
  padding: 0 20px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;
`
const ErrorRickImg = styled.img`
  align-self: end;
  grid-column: 2/3;
  grid-row: 2/7;
  width: 100%;
`
const Message = styled.h3`
  align-self: end;
  color: rgb(204, 0, 0);
  font-size: 32px;
  font-weight: 500;
  grid-column: 1/3;
  grid-row: 4/5;
  line-height: 1.25;
`

const ErrorButton = styled(Button)`
  align-self: center;
  grid-column: 1/2;
  grid-row: 5/6;
  justify-self: stretch;
`
