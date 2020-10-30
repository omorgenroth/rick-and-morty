import styled from 'styled-components'
import { ReactComponent as SearchIcon } from './assets/search_icon.svg'
import { ReactComponent as RandomIcon } from './assets/random_icon.svg'

export default function Footer() {
  return (
    <FooterStyled>
      <SearchWrapper>
        <input type="text" placeholder="Search for character" />
        <button>
          <SearchIcon />
        </button>
      </SearchWrapper>
      <RandomButton>
        <RandomIcon />
      </RandomButton>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const SearchWrapper = styled.form`
  height: 42px;
  border: 1px black solid;
  border-radius: 10px;
  display: flex;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);

  input {
    background: #d4ebef;
    border: none;
    width: 235px;
    height: 40px;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    border-radius: 10px 0 0 10px;
    color: #2a2f30;
    font-family: 'Oswald', sans-serif;
  }

  input:focus {
    outline: none;
    border: #a6e255 2px solid;
    border-radius: 10px 0 0 10px;
  }

  button {
    border: none;
    background: #a6e255;
    width: 40px;
    height: 40px;
    border-radius: 0 10px 10px 0;
  }
`

const RandomButton = styled.button`
  width: 46px;
  height: 42px;
  background: #a6e255;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
`