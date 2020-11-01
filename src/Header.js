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
  background: linear-gradient(
    to top,
    rgba(101, 198, 218, 0) 0%,
    rgba(101, 198, 218, 0.9) 20%,
    rgba(101, 198, 218) 70%
  );
  left: 0px;
  position: fixed;
  text-align: center;
  top: 0px;
  width: 100%;
  z-index: 100;
`

const LogoStyled = styled.img`
  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.5));
  width: 95%;
`
