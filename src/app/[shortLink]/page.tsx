'use server'

import { permanentRedirect, redirect } from 'next/navigation'

import { api } from '@/trpc/server'

import shortLinkIdDecoded from '@/lib/shortLinkIdDecoded'

export default async function RedirectLink({
  params,
}: {
  params: { shortLink: string }
}) {
  if (params.shortLink.length > 30) return redirect('/')

  if (params.shortLink.length === 6) {
    const shortLinkId = shortLinkIdDecoded(params.shortLink)
    const shortLinkById =
      await api.shortLink.getShortLinkById.query(shortLinkId)

    if (shortLinkById !== null)
      return permanentRedirect(shortLinkById.originalUrl)
  }

  const shortLinkByAlias = await api.shortLink.getShortLinkByAlias.query(
    params.shortLink,
  )

  if (shortLinkByAlias !== null)
    return permanentRedirect(shortLinkByAlias.originalUrl)

  return redirect('/')
}
