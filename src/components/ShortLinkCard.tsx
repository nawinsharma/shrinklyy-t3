import ShortLinkOptionsMenu from '@/components/ShortLinkOptionsMenu'
import CopyShortLinkUrlIconButton from '@/components/CopyShortLinkUrlIconButton'

import { getTimeAgo } from '@/lib/timeAgo'

import { TbWorld } from 'react-icons/tb'
import { env } from '@/env'

interface Props {
  code: string
  alias: string | null
  id: bigint
  createdAt: Date
  originalUrl: string
  description: string | null
}

const ShortLinkCard = ({
  code,
  alias,
  description,
  originalUrl,
  createdAt,
  id,
}: Props) => {
  const name = alias ?? code
  const shortLinkUrl = `${env.NEXT_PUBLIC_HOST}/${name}`

  return (
    <article className='group/card relative rounded-lg border-b border-gray-300 bg-gradient-to-b from-gray-100 to-transparent p-3.5 hover:from-gray-200/80'>
      <h6 className='flex'>
        <TbWorld fontSize='1.6rem' className='self-start' />

        <span className='text-xl font-bold leading-[1.15]'>
          <span>/{name}</span>{' '}
          <CopyShortLinkUrlIconButton shortLinkUrl={shortLinkUrl} />
        </span>
      </h6>

      <ShortLinkOptionsMenu
        shortLink={{ alias, description, id }}
        shortLinkUrl={shortLinkUrl}
      />

      <p className='mb-1 w-full overflow-hidden text-ellipsis text-nowrap text-sm font-medium text-gray-500'>
        {originalUrl}
      </p>

      <p className='text-xs'>{description}</p>

      <span className='text-xs font-semibold text-gray-600'>
        {getTimeAgo(createdAt)}
      </span>
    </article>
  )
}

export default ShortLinkCard
