import axios from 'axios'

const baseUrl = 'https://rickandmortyapi.com/api/character'

export async function getDataByUrl(url) {
  const res = await axios.get(url)
  return res.data
}

export async function getDataByName(name) {
  try {
    const res = await axios.get(`${baseUrl}?name=${name}`)
    return res.data
  } catch {
    return 'error'
  }
}

export async function getDataById(id) {
  try {
    const res = await axios.get(`${baseUrl}/ ${id}`)
    return res.data
  } catch {
    return 'error'
  }
}
