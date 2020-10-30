const baseUrl = 'https://rickandmortyapi.com/api/character'

export function getDataByName(name) {
  return fetch(`${baseUrl}?name=${name}`).then((res) => res.json())
}
