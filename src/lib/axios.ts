import Axios from 'axios'
import { API_HOST } from 'src/constants'

export const apiAxios = Axios.create({ baseURL: API_HOST })
