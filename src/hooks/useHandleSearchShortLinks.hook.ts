import { type ChangeEvent, useState } from 'react'

import { useSearchQueryParams } from '@/hooks/useSearchQueryParams.hook'

export const useHandleSearchShortLinks = () => {
  const { setQueryParam } = useSearchQueryParams()

  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(
    null,
  )

  const handleSearchShortLinks = (event: ChangeEvent<HTMLInputElement>) => {
    const inputSearchValue = event.currentTarget.value

    if (typingTimeout) {
      clearTimeout(typingTimeout)
    }

    const newTimeout = setTimeout(() => {
      setQueryParam('query', inputSearchValue)
    }, 500)

    setTypingTimeout(newTimeout)
  }

  return handleSearchShortLinks
}
