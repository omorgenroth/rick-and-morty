import axios from 'axios'

const baseUrl = 'https://rickandmortyapi.com/api/character'
/* 
export function getDataByName(name) {
  return fetch(`${baseUrl}?name=${name}`).then((res) => res.json())
} */

export function getDataByUrl(url) {
  return fetch(url).then((res) => res.json())
}

export async function getDataByName(name) {
  try {
    const res = await axios.get(`${baseUrl}?name=${name}`)
    return res.data
  } catch {
    return 'error'
  }
}
