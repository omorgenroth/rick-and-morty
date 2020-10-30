const baseUrl = 'https://rickandmortyapi.com/api/character'

export function getDataByName(name) {
  return fetch(`${baseUrl}?name=${name}`)
    .then((res) => res.json())
    .catch((error) => console.log(error.message))
}

export function getCharacter(url) {
  return fetch(url)
    .then((res) => res.json())
    .catch((error) => console.log(error.message))
}
