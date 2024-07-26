'use client'
import React from 'react';
import { useSearchShortLinks } from '@/hooks/useSearchShortLinks.hook';
import { useSearchQueryParams } from '@/hooks/useSearchQueryParams.hook';
import { useHandleSearchShortLinks } from '@/hooks/useHandleSearchShortLinks.hook';

import Input from '@/components/Input';
import ShortLinkCard from '@/components/ShortLinkCard';
import ShortLinkCardSkeleton from '@/components/ShortLinkCardSkeleton';
import CreateShortLinkModalButton from '@/components/CreateShortLinkModalButton';

import { IoIosSearch } from 'react-icons/io';
import { MdErrorOutline } from 'react-icons/md';
import { TbLinkOff } from 'react-icons/tb';

export default function DashboardPage() {
  const { searchParams } = useSearchQueryParams();
  const searchShortLinks = useHandleSearchShortLinks();
  const { isLoading, isError, isSuccess, error, shortLinks } = useSearchShortLinks(searchParams.get('query') ?? '');

  return (
    <section className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Short Links Dashboard</h1>
        
        <article className="mb-8 flex items-center gap-4">
          <Input
            defaultValue={searchParams.get('query') ?? ''}
            onChange={searchShortLinks}
            startIcon={<IoIosSearch fontSize="1.4rem" />}
            placeholder="Search short links..."
            containerClasses="flex-grow"
            className="w-full text-black dark:text-white bg-gray-200 dark:bg-gray-800 border-gray-700 placeholder-gray-800 dark:placeholder-gray-700 focus:ring-2 focus:ring-blue-500"
          />
          <CreateShortLinkModalButton />
        </article>

        {isLoading ? (
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(9)].map((_, index) => (
              <ShortLinkCardSkeleton key={index} />
            ))}
          </section>
        ) : isError ? (
          <section className="flex h-[60vh] items-center justify-center">
            <article className="flex flex-col items-center gap-4 text-center">
              <MdErrorOutline className="text-red-500" fontSize="6rem" />
              <p className="text-xl font-semibold text-red-500">
                {error.data?.httpStatus} - {error.data?.code}
              </p>
              <p className="text-red-400">An error occurred while fetching your short links.</p>
            </article>
          </section>
        ) : shortLinks?.length === 0 ? (
          <section className="flex h-[60vh] items-center justify-center">
            <article className="flex flex-col items-center gap-4 text-center">
              <TbLinkOff fontSize="6rem" />
              <p className="text-xl font-semibold">You do not have any short links yet</p>
              <p className="text-gray-900 dark:text-gray-400">Create your first short link to get started!</p>
            </article>
          </section>
        ) : isSuccess && shortLinks ? (
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {shortLinks.map(shortLink => (
              <ShortLinkCard key={shortLink.id} {...shortLink} />
            ))}
          </section>
        ) : null}
      </div>
    </section>
  );
}