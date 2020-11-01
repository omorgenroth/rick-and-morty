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
  display: ${(props) => (props.hidden ? 'none' : 'block')};
  border-radius: 10px;
  border: 2px solid #596f72;
  padding: 14px 0;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
  color: #596f72;
  font-weight: 500;
  font-size: 26px;
  text-align: center;
  background-color: rgba(194, 239, 245, 0.9);
  margin-top: 40px;
`
