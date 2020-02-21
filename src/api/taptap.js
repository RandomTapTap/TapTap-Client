import axios from 'axios'

const taptap = axios.create({
  baseURL: 'https://polar-ridge-17555.herokuapp.com'
})

export default taptap
