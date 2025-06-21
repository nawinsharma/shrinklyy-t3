'use client'
import React from 'react';
import { motion, type Variants } from 'framer-motion';
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
import { Link } from 'lucide-react';

export default function DashboardPage() {
  const { searchParams } = useSearchQueryParams();
  const searchShortLinks = useHandleSearchShortLinks();
  const { isLoading, isError, isSuccess, error, shortLinks } = useSearchShortLinks(searchParams.get('query') ?? '');

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] },
    },
  };

  const staggerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
    },
  };

  return (
    <section className="relative z-10 w-full">
      <div className="max-w-7xl mx-auto">
        {/* Brand Badge */}
        <motion.div
          variants={fadeUpVariants}
          initial='hidden'
          animate='visible'
          className='mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 md:mb-12'
        >
          <Link className='h-4 w-4 text-blue-400' />
          <span className='text-sm tracking-wide text-white/60'>
            Dashboard
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          variants={fadeUpVariants}
          initial='hidden'
          animate='visible'
          className="mb-8"
        >
          <h1 className='text-4xl font-bold mb-8 text-center'>
            <span className='bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent'>
              Short Links Dashboard
            </span>
          </h1>
        </motion.div>
        
        {/* Search and Create Section */}
        <motion.div
          variants={fadeUpVariants}
          initial='hidden'
          animate='visible'
          className="mb-8 flex items-center gap-4"
        >
          <Input
            defaultValue={searchParams.get('query') ?? ''}
            onChange={searchShortLinks}
            startIcon={<IoIosSearch fontSize="1.4rem" />}
            placeholder="Search short links..."
            containerClasses="flex-grow"
            className="w-full text-white bg-white/[0.05] border-white/[0.1] placeholder-white/40 focus:ring-2 focus:ring-blue-500/50 backdrop-blur-sm"
          />
          <CreateShortLinkModalButton />
        </motion.div>

        {/* Content Section */}
        {isLoading ? (
          <motion.section
            variants={staggerVariants}
            initial='hidden'
            animate='visible'
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[...Array(9)].map((_, index) => (
              <motion.div key={index} variants={cardVariants}>
                <ShortLinkCardSkeleton />
              </motion.div>
            ))}
          </motion.section>
        ) : isError ? (
          <motion.section
            variants={fadeUpVariants}
            initial='hidden'
            animate='visible'
            className="flex h-[60vh] items-center justify-center"
          >
            <article className="flex flex-col items-center gap-4 text-center">
              <MdErrorOutline className="text-red-400" fontSize="6rem" />
              <p className="text-xl font-semibold text-red-400">
                {error.data?.httpStatus} - {error.data?.code}
              </p>
              <p className="text-red-300/80">An error occurred while fetching your short links.</p>
            </article>
          </motion.section>
        ) : shortLinks?.length === 0 ? (
          <motion.section
            variants={fadeUpVariants}
            initial='hidden'
            animate='visible'
            className="flex h-[60vh] items-center justify-center"
          >
            <article className="flex flex-col items-center gap-4 text-center">
              <TbLinkOff fontSize="6rem" className="text-white/60" />
              <p className="text-xl font-semibold text-white">You do not have any short links yet</p>
              <p className="text-white/60">Create your first short link to get started!</p>
            </article>
          </motion.section>
        ) : isSuccess && shortLinks ? (
          <motion.section
            variants={staggerVariants}
            initial='hidden'
            animate='visible'
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {shortLinks.map((shortLink, index) => (
              <motion.div key={shortLink.id} variants={cardVariants}>
                <ShortLinkCard {...shortLink} />
              </motion.div>
            ))}
          </motion.section>
        ) : null}
      </div>
    </section>
  );
}