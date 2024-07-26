import { TbWorld } from 'react-icons/tb'

const ShortLinkCardSkeleton = () => {
  return (
    <article className='flex animate-pulse flex-col gap-1.5 rounded-lg bg-gray-400 dark:bg-gradient-to-b from-gray-800 to-transparent p-3.5'>
      <h6 className='flex items-center gap-0.5'>
        <TbWorld fontSize='1.6rem' className='text-gray-600' />
        <span className='h-7 flex-grow rounded-full bg-gray-400 dark:bg-gray-700'></span>
      </h6>

      <p className='h-4 w-full rounded-full bg-gray-400 dark:bg-gray-600'></p>

      <span className='h-3 w-10 rounded-lg bg-gray-400 dark:bg-gray-700'></span>
    </article>
  )
}

export default ShortLinkCardSkeleton
