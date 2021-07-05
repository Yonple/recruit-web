import { useMemo } from 'react'
import { useState } from 'react'
import { useInfiniteQuery } from 'react-query'
import { findPosts, Post } from 'src/api'
import { useDebounce } from 'src/lib/useDebounce'
import { useIntersectionObserver } from 'src/lib/useIntersectionObserver'

const NUM_PER_PAGE = 10

export const useController = () => {
  const [query, setQuery] = useState('')
  const [tabKey, setTabKey] = useState('a')
  const debouncedQuery = useDebounce(query, 150)

  const {
    data,
    isLoading: loading,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery(
    ['posts', { query: debouncedQuery, type: tabKey }],
    ({ pageParam }) =>
      findPosts({ type: tabKey as 'a' | 'b', page: pageParam, query: debouncedQuery }),
    {
      getNextPageParam: (lastPage, allPages) => {
        const isExistNextPage = lastPage.length !== 0
        if (!isExistNextPage) return false

        const nextPage = Math.ceil(
          allPages.reduce((acc, curr) => acc + curr.length, 0) / NUM_PER_PAGE,
        )
        return nextPage
      },
    },
  )

  const { ref: lastPostRef } = useIntersectionObserver({
    enabled: hasNextPage,
    onIntersection: fetchNextPage,
  })

  const posts = useMemo(() => (data ? ([] as Post[]).concat(...data.pages) : []), [data])

  return { query, setQuery, posts, loading, tabKey, setTabKey, lastPostRef }
}
