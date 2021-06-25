import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

interface Props {
  onIntersection: () => void
  enabled?: boolean
}
export const useIntersectionObserver = ({ enabled = true, onIntersection }: Props) => {
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView && enabled) onIntersection()

    // eslint-disable-next-line
  }, [inView, enabled])

  return { ref }
}
