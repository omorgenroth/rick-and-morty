import styled from 'styled-components/macro'
import Button from './Button'
import AliveIcon from './assets/alive.png'
import DeadIcon from './assets/dead.png'

export default function CharacterCard({
  url,
  name,
  gender,
  species,
  hidden,
  onClick,
  btnhidden,
  status,
  loc,
}) {
  return (
    <CardWrapper hidden={hidden}>
      <CharacterWrapper>
        <Avatar src={url} />
        <StatusIcon src={status === 'Dead' ? DeadIcon : AliveIcon} />
      </CharacterWrapper>
      <InfoCard>
        <h2>{name}</h2>
        <p>
          Gender: <span>{gender}</span>
        </p>
        <p>
          Species: <span>{species}</span>
        </p>
        <p>
          Last seen: <span>{loc && loc.name}</span>
        </p>
      </InfoCard>
      <Button hidden={btnhidden} onClick={onClick}>
        Back
      </Button>
    </CardWrapper>
  )
}
const CardWrapper = styled.section`
  display: ${(props) => (props.hidden ? 'none' : 'grid')};
  gap: 20px;
  padding-top: 20px;
`

const CharacterWrapper = styled.div`
  position: relative;
  width: 50%;
`

const Avatar = styled.img`
  border-radius: 10px;
  border: 2px solid rgb(89, 111, 114);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
  width: 100%;
`

const StatusIcon = styled.img`
  bottom: 0;
  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.5));
  position: absolute;
  right: -75px;
  transform: rotate(-8deg);
  width: 110px;
`

const InfoCard = styled.div`
  background-color: rgba(194, 239, 245, 0.9);
  border-radius: 10px;
  border: 2px solid rgb(89, 111, 114);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
  color: rgb(89, 111, 114);
  font-size: 26px;
  font-weight: 500;
  padding: 14px 20px;

  h2 {
    color: rgb(40, 48, 45);
    font-size: 34px;
    font-weight: 500;
    line-height: 1.25;
    margin-bottom: 10px;
  }

  p {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.75;
  }

  span {
    font-weight: 300;
  }
`
