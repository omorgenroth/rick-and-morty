import styled from 'styled-components/macro'
import ErrorRick from './assets/error_rick.png'

export default function ErrorMessage({ hidden }) {
  return (
    <ErrorWrapper hidden={hidden}>
      <Message>
        INVALID NAME... <br />
        LOSER.
      </Message>
      <ErrorRickImg src={ErrorRick} />
    </ErrorWrapper>
  )
}

const ErrorWrapper = styled.div`
  display: ${(props) => (props.hidden ? 'none' : 'block')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(194, 239, 245, 0.8);
  height: 100vh;
`
const ErrorRickImg = styled.img`
  position: absolute;
  bottom: 0;
  right: 10px;
  height: 550px;
`
const Message = styled.h3`
  position: absolute;
  top: 340px;
  left: 20px;
  color: #cc0000;
  font-weight: 500;
  font-size: 30px;
  line-height: 1.25;
`
