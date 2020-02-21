import axios from 'axios'

const taptap = axios.create({
  baseURL: 'http://localhost:4000'
})

export default taptap
