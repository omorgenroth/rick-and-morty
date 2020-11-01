import styled from 'styled-components/macro'

export default function IntroCard({ hidden }) {
  return (
    <Card hidden={hidden}>
      Get schwifty and search a character by its name or
      <br />
      pick a random one...
    </Card>
  )
}

const Card = styled.div`
  background-color: rgba(194, 239, 245, 0.9);
  border-radius: 10px;
  border: 2px solid rgb(89, 111, 114);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
  color: rgb(89, 111, 114);
  display: ${(props) => (props.hidden ? 'none' : 'block')};
  font-size: 26px;
  font-weight: 500;
  margin-top: 40px;
  padding: 14px 0;
  text-align: center;
`
