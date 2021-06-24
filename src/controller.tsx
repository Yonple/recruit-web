import { useMemo } from 'react'
import { useState } from 'react'
import { useImagesQuery } from './api'

export const useController = () => {
  const [query, setQuery] = useState('')
  const { data } = useImagesQuery(query)

  const images = useMemo(() => data ?? [], [data])

  return { query, setQuery, images }
}
