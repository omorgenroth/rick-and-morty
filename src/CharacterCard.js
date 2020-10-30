import styled from 'styled-components'

export default function CharacterCard({
  name,
  avatarUrl = 'https://rickandmortyapi.com/api/character/avatar/404.jpeg',
  gender,
  species,
  type,
  location,
  status,
  hidden,
}) {
  return (
    <CardWrapper hidden={hidden}>
      <Avatar src={avatarUrl} />
      <InfoCard>
        <h2>{name}test</h2>
        <p>
          Gender: <span>{gender}test</span>
        </p>
        <p>
          Species: <span>{species}test</span>
        </p>
        <p>
          Type: <span>{type}test</span>
        </p>
        <p>
          Location: <span>{location}test</span>
        </p>
      </InfoCard>
    </CardWrapper>
  )
}

const CardWrapper = styled.section`
  display: ${(props) => (props.hidden ? 'none' : 'grid')};
  gap: 20px;
`

const Avatar = styled.img`
  border-radius: 10px;
  border: 2px solid #596f72;
  width: 50%;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
`

const InfoCard = styled.div`
  border-radius: 10px;
  border: 2px solid #596f72;
  padding: 15px 0 20px 20px;
  color: #596f72;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
  color: #596f72;
  font-weight: 500;
  font-size: 26px;
  background-color: rgba(194, 239, 245, 0.9);
  line-height: 54px;

  h2 {
    color: #28302d;
    font-weight: 500;
    font-size: 34px;
    line-height: 62px;
  }

  p {
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
  }

  span {
    font-weight: 300;
  }
`
