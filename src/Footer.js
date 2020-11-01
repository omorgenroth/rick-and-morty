import styled from 'styled-components/macro'
import { ReactComponent as SearchIcon } from './assets/search_icon.svg'
import { ReactComponent as RandomIcon } from './assets/random_icon.svg'

export default function Footer({ onSearchRequest, showErrorMessage, onClick }) {
  return (
    <FooterStyled>
      <SearchWrapper onSubmit={handleSubmit}>
        <input
          name="searchinput"
          type="text"
          placeholder="Search for character"
          required
        />
        <button>
          <SearchIcon />
        </button>
      </SearchWrapper>
      <RandomButton onClick={onClick}>
        <RandomIcon />
      </RandomButton>
    </FooterStyled>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const formEl = event.target
    const input = formEl.searchinput

    input.value.trim() === ''
      ? showErrorMessage(showErrorMessage)
      : onSearchRequest(input.value)
    formEl.reset()
  }
}

const FooterStyled = styled.footer`
  bottom: 0;
  display: flex;
  justify-content: space-between;
  left: 0;
  padding: 0 20px 20px 20px;
  position: fixed;
  width: 100%;
`

const SearchWrapper = styled.form`
  border-radius: 10px;
  border: 1px solid rgb(89, 111, 114);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
  display: flex;
  width: 100%;

  input {
    background-color: rgba(194, 239, 245, 0.9);
    border-radius: 10px 0 0 10px;
    border: none;
    color: rgb(89, 111, 114);
    font-family: 'Oswald', sans-serif;
    font-size: 18px;
    font-weight: 400;
    height: 40px;
    text-align: center;
    width: 100%;
  }

  input:focus {
    border-radius: 10px 0 0 10px;
    border: rgb(166, 226, 85) 2px solid;
    outline: none;
  }

  button {
    background: rgb(166, 226, 85);
    border-radius: 0 10px 10px 0;
    border: none;
    flex-shrink: 0;
    height: 40px;
    width: 40px;
  }
`

const RandomButton = styled.button`
  background: rgb(166, 226, 85);
  border-radius: 10px;
  border: 1px solid rgb(89, 111, 114);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
  flex-shrink: 0;
  height: 42px;
  margin-left: 15px;
  width: 50px;
`
