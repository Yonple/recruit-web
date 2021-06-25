import { useMemo } from 'react'
import { useState } from 'react'
import { useImagesQuery } from './api'
import { useDebounce } from './lib/useDebounce'

export const useController = () => {
  const [query, setQuery] = useState('')

  const debouncedQuery = useDebounce(query, 150)

  const { data, isLoading: loading } = useImagesQuery(debouncedQuery)

  const images = useMemo(() => data ?? [], [data])

  return { query, setQuery, images, loading }
}
