import styled from 'styled-components'
import Logo from './assets/rick_and_morty_logo.png'

export default function Header() {
  return (
    <HeaderStyled>
      <LogoStyled src={Logo} alt="" />
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  width: 100%;
  text-align: center;
  position: fixed;
  top: 0px;
  left: 0px;
`

const LogoStyled = styled.img`
  width: 95%;
  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.5));
`
