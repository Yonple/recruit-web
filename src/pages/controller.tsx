import { useMemo } from 'react'
import { useState } from 'react'
import { usePosts } from 'src/api'
import { useDebounce } from 'src/lib/useDebounce'

export const useController = () => {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 150)

  const { data, isLoading: loading } = usePosts({ type: 'a', query: debouncedQuery })

  const posts = useMemo(() => data ?? [], [data])

  return { query, setQuery, posts, loading }
}
