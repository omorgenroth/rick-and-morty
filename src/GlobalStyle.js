import { createGlobalStyle } from 'styled-components'
import BackgroundImage from './assets/rick_and_morty_bg.png'

export default createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background-image: url(${BackgroundImage});
    background-size: auto 100vh;
    background-repeat: no-repeat;
    font-family: 'Oswald', sans-serif;
}
`
