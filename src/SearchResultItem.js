import styled from 'styled-components/macro'

export default function SearchResultItem({ id, image, name, url, onSelect }) {
  function onClick(url) {
    onSelect(url)
  }

  return (
    <ItemWrapper onClick={() => onClick(url)} key={id}>
      <Avatar src={image} />
      <Name>{name}</Name>
    </ItemWrapper>
  )
}

const ItemWrapper = styled.div`
  display: grid;
  gap: 10px;
  place-items: center;
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
  width: 100%;
  color: #596f72;
  padding: 8px 0 8px 15px;
  border-radius: 10px;
  border: 2px solid #596f72;
  background-color: rgba(194, 239, 245, 0.9);
  font-weight: 500;
  font-size: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`
