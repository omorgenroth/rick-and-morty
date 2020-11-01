import { createGlobalStyle } from 'styled-components/macro'
import BackgroundImage from './assets/rick_and_morty_bg.png'

export default createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background-attachment: fixed;
    background-image: url(${BackgroundImage});
    background-size: auto 100vh;
    font-family: 'Oswald', sans-serif;
    position: relative;
}
`
