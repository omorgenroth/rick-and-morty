import styled from 'styled-components'

export default function CharacterCard({
  name,
  avatarUrl,
  species,
  type,
  location,
}) {
  return (
    <CardWrapper>
      <Name> {name} </Name>
      <Avatar src={avatarUrl} />
      <Details>
        <span>Species:</span>
        <p> {species} </p>
        <span>Type:</span>
        <p> {type} </p>
        <span>Location:</span>
        <p> {location} </p>
      </Details>
    </CardWrapper>
  )
}

const CardWrapper = styled.section`
  display: grid;
`
const Name = styled.div`
  border-radius: 20px;
`
const Avatar = styled.img`
  border-radius: 20px;
`
const Details = styled.div`
  border-radius: 20px;
`
