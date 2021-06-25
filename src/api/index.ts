import { apiAxios } from 'src/lib/axios'

export interface Post {
  id: string
  title: string
  content: string
  createdAt: string
  type: 'a' | 'b'
}

export interface FindPostsRequest {
  query?: string
  type: 'a' | 'b'
  page?: number
}

export const findPosts = async ({ type, query, page }: FindPostsRequest) => {
  const { data } = await apiAxios.get<Post[]>(
    `/${type}-posts?page=${page ?? 0}&search=${query ?? ''}`,
  )
  return data
}

export const findPost = async (id: string, type: 'a' | 'b') => {
  const { data } = await apiAxios.get<Post>(`/${type}-posts/${id}`)
  return data
}
