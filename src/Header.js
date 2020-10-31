import styled from 'styled-components/macro'
import Logo from './assets/logo.png'

export default function Header() {
  return (
    <HeaderStyled>
      <LogoStyled src={Logo} />
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
