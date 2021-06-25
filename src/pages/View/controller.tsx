import { useQuery } from 'react-query'
import { useLocation, useParams } from 'react-router'
import queryString from 'querystring'
import { findPost } from 'src/api'

export const useController = () => {
  const { type } = useParams<{ type: 'a' | 'b' }>()
  const location = useLocation()
  const { id } = queryString.parse(location.search.replace(/^\?/, '')) as { [key: string]: string }

  const { data: post } = useQuery(['post', { type, id }], () => findPost(id, type))

  return { post }
}
