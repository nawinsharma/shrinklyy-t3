import { api } from '@/trpc/react'

export const useSearchShortLinks = (query: string) => {
  const { data: shortLinks, ...queryResult } =
    api.shortLink.searchShortLinks.useQuery(query, {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    })

  return { shortLinks, ...queryResult }
}
