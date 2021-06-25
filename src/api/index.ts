import { useQuery } from 'react-query'
import { apiAxios } from 'src/lib/axios'

export interface Post {
  id: string
  title: string
  content: string
  createdAt: string
}

export interface FindPostsRequest {
  query?: string
  type: 'a' | 'b'
  page?: number
}

export const usePosts = (request: FindPostsRequest) => {
  return useQuery(['posts', request], () => findPosts(request))
}

export const findPosts = async ({ type, query, page }: FindPostsRequest) => {
  const { data } = await apiAxios.get<Post[]>(
    `/${type}-posts?page=${page ?? 0}&search=${query ?? ''}`,
  )
  return data
}
