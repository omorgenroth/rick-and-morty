import styled from 'styled-components/macro'

export default function SearchResultItem({ id, image, name, url, onSelect }) {
  return (
    <ItemWrapper onClick={() => onClick(url)} key={id}>
      <Avatar src={image} />
      <Name>{name}</Name>
    </ItemWrapper>
  )

  function onClick(url) {
    onSelect(url)
  }
}

const ItemWrapper = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 15% auto;
  place-items: center;
`

const Avatar = styled.img`
  border-radius: 10px;
  border: 2px solid rgb(89, 111, 114);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  max-height: 100%;
  object-fit: cover;
  width: 100%;
`

const Name = styled.p`
  background-color: rgba(194, 239, 245, 0.9);
  border-radius: 10px;
  border: 2px solid rgb(89, 111, 114);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  color: rgb(89, 111, 114);
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  padding: 8px 0 8px 15px;
  width: 100%;
`
