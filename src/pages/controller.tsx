import { useState } from 'react'

export const useController = () => {
  const [query, setQuery] = useState('')
  return { query, setQuery }
}
