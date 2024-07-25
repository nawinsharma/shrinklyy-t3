'use client'

import { useSearchShortLinks } from '@/hooks/useSearchShortLinks.hook'
import { useSearchQueryParams } from '@/hooks/useSearchQueryParams.hook'
import { useHandleSearchShortLinks } from '@/hooks/useHandleSearchShortLinks.hook'

import Input from '@/components/Input'
import ShortLinkCard from '@/components/ShortLinkCard'
import ShortLinkCardSkeleton from '@/components/ShortLinkCardSkeleton'
import CreateShortLinkModalButton from '@/components/CreateShortLinkModalButton'

import { IoIosSearch } from 'react-icons/io'
import { MdErrorOutline } from 'react-icons/md'
import { TbLinkOff } from 'react-icons/tb'

export default function DashboardPage() {
  const { searchParams } = useSearchQueryParams()

  const searchShortLinks = useHandleSearchShortLinks()

  const { isLoading, isError, isSuccess, error, shortLinks } =
    useSearchShortLinks(searchParams.get('query') ?? '')

  return (
    <section className='pt-5'>
      <article className='mb-4 flex items-center gap-3'>
        <Input
          defaultValue={searchParams.get('query') ?? ''}
          onChange={searchShortLinks}
          startIcon={<IoIosSearch fontSize='1.4rem' />}
          placeholder='Search...'
          containerClasses='flex-grow'
          className='w-full'
        />

        <CreateShortLinkModalButton />
      </article>

      {isLoading ? (
        <section className='xs:grid-cols-2 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3'>
          {[...Array(15)].map(() => (
            <ShortLinkCardSkeleton key={crypto.randomUUID()} />
          ))}
        </section>
      ) : isError ? (
        <section className='flex h-[60vh] items-center justify-center'>
          <article className='flex flex-col items-center gap-2'>
            <MdErrorOutline fontSize='6rem' className='text-red-600' />
            <p className='text-center text-lg font-semibold text-red-600'>
              {error.data?.httpStatus} - {error.data?.code}
            </p>
          </article>
        </section>
      ) : shortLinks?.length === 0 ? (
        <section className='flex h-[60vh] items-center justify-center'>
          <article className='flex flex-col items-center gap-2'>
            <TbLinkOff fontSize='6rem' />
            <p className='text-center text-lg font-semibold'>
              You don&apos;t have any short links
            </p>
          </article>
        </section>
      ) : isSuccess && shortLinks ? (
        <section className='xs:grid-cols-2 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3'>
          {shortLinks.map(shortLink => (
            <ShortLinkCard key={shortLink.id} {...shortLink} />
          ))}
        </section>
      ) : null}
    </section>
  )
}
