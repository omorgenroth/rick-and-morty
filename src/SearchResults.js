import styled from 'styled-components'
import SearchResultItem from './SearchResultItem'

export default function SearchResults({ hidden, results, getCharacter }) {
  function onSelect(url) {
    getCharacter(url)
  }
  return (
    <ResultWrapper hidden={hidden}>
      <h2>Your search results:</h2>
      <Grid>
        {results.map(({ id, name, image, url }) => (
          <SearchResultItem
            onSelect={onSelect}
            key={id}
            name={name}
            image={image}
            url={url}
          />
        ))}
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
  }
`

const Grid = styled.div`
  padding-top: 15px;
  display: grid;
  gap: 15px;
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
