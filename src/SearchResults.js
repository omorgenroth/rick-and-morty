import styled from 'styled-components'

export default function SearchResults({
  name,
  avatarUrl = 'https://rickandmortyapi.com/api/character/avatar/474.jpeg',
  hidden = false,
}) {
  return (
    <ResultWrapper hidden={hidden}>
      <h2>Your search results:</h2>
      <Grid>
        <Avatar src={avatarUrl} />
        <Name>{name}</Name>
      </Grid>
      <Button>Show more...</Button>
    </ResultWrapper>
  )
}

const ResultWrapper = styled.section`
  overflow-y: auto;
  height: 100%;
  display: ${(props) => (props.hidden ? 'none' : 'block')};

  h2 {
    color: #28302d;
    font-weight: 500;
    font-size: 26px;
    line-height: 54px;
  }
`

const Grid = styled.div`
  padding-top: 15px;
  display: grid;
  gap: 15px;
  grid-template-columns: 15% auto;
`

const Avatar = styled.img`
  border-radius: 10px;
  border: 2px solid #596f72;
  object-fit: cover;
  width: 100%;
  max-height: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`

const Name = styled.p`
  color: #596f72;
  padding: 4px 0 0 15px;
  border-radius: 10px;
  border: 2px solid #596f72;
  background-color: rgba(194, 239, 245, 0.9);
  font-weight: 500;
  font-size: 20px;
  line-height: 34px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`
const Button = styled.button`
  display: block;
  padding: 7px 45px;
  font-size: 18px;
  font-weight: 400;
  color: #28302d;
  border-radius: 10px;
  border: 2px solid #596f72;
  background: #a6e255;
  margin: auto;
  margin-top: 15px;
  margin-bottom: 5px;
  font-family: 'Oswald', sans-serif;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`
