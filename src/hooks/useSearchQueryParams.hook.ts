import { useCallback } from 'react'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export const useSearchQueryParams = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const setSearchQuery = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams],
  )

  const setQueryParam = (variable: string, value: string) => {
    router.push(pathname + '?' + setSearchQuery(variable, value))
  }

  return { setQueryParam, searchParams }
}
