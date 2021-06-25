import Axios from 'axios'
import { useQuery } from 'react-query'

export interface Image {
  author: string
  download_url: string
  id: number
  url: string
  width: number
}

export const useImagesQuery = (query: string) => {
  return useQuery(['images', query], () => findImages(query))
}

export const findImages = async (query: string) => {
  const hashCode = (str: string) => {
    var h = 0,
      l = str.length,
      i = 0
    if (l > 0) while (i < l) h = ((h << 5) - h + str.charCodeAt(i++)) | 0
    return h
  }
  const seedPage = Math.abs(hashCode(query)) % 80
  const { data } = await Axios.get<Image[]>(
    `https://picsum.photos/v2/list?page=${seedPage}&limit=12`,
  )
  return data
}
