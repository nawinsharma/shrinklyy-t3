import { TbWorld } from 'react-icons/tb'

const ShortLinkCardSkeleton = () => {
  return (
    <article className='flex animate-pulse flex-col gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-sm shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]'>
      {/* Header */}
      <div className='flex items-start justify-between'>
        <div className='flex items-center gap-3'>
          <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/[0.1]'>
            <TbWorld className='h-5 w-5 text-white/40' />
          </div>
          <div className='space-y-2'>
            <div className='h-6 w-24 rounded-full bg-white/20'></div>
            <div className='h-3 w-16 rounded-full bg-white/10'></div>
          </div>
        </div>
        <div className='h-8 w-8 rounded-full bg-white/10'></div>
      </div>

      {/* URL Section */}
      <div className='space-y-2'>
        <div className='h-4 w-20 rounded-full bg-white/20'></div>
        <div className='h-4 w-full rounded-full bg-white/10'></div>
        <div className='h-4 w-3/4 rounded-full bg-white/10'></div>
      </div>

      {/* Description */}
      <div className='space-y-2'>
        <div className='h-4 w-full rounded-full bg-white/10'></div>
        <div className='h-4 w-2/3 rounded-full bg-white/10'></div>
      </div>
    </article>
  )
}

export default ShortLinkCardSkeleton
