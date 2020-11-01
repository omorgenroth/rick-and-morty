import styled from 'styled-components/macro'

const Button = styled.button`
  padding: 7px 45px;
  font-size: 18px;
  font-weight: 400;
  color: rgb(40, 48, 45);
  border-radius: 10px;
  border: 2px solid rgb(89, 111, 114);
  background: rgb(166, 226, 85);
  margin: 5px auto;
  font-family: 'Oswald', sans-serif;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.hidden ? 'none' : 'block')};
  cursor: pointer;
`

export default Button
