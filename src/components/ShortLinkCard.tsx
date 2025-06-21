import { motion } from 'framer-motion';
import ShortLinkOptionsMenu from '@/components/ShortLinkOptionsMenu'
import CopyShortLinkUrlIconButton from '@/components/CopyShortLinkUrlIconButton'

import { getTimeAgo } from '@/lib/timeAgo'

import { TbWorld, TbExternalLink } from 'react-icons/tb'

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
  const shortLinkUrl = `https://trim.nawin.xyz/${name}`
  console.log(shortLinkUrl);
  console.log(originalUrl);
  console.log(description);
  console.log(name);
  

  return (
    <motion.article 
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        transition: { duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }
      }}
      whileTap={{ scale: 0.98 }}
      className='group/card relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-sm shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] hover:border-white/[0.15] hover:bg-white/[0.05] transition-all duration-300'
    >
      {/* Header */}
      <div className='mb-4 flex items-start justify-between'>
        <div className='flex items-center gap-3'>
          <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/[0.1]'>
            <TbWorld className='h-5 w-5 text-blue-400' />
          </div>
          <div>
            <h6 className='text-lg font-bold text-white flex items-center gap-2'>
              <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                /{name}
              </span>
              <CopyShortLinkUrlIconButton shortLinkUrl={shortLinkUrl} />
            </h6>
            <p className='text-xs text-white/60 font-medium'>
              {getTimeAgo(createdAt)}
            </p>
          </div>
        </div>
        
        <ShortLinkOptionsMenu
          shortLink={{ alias, description, id }}
          shortLinkUrl={shortLinkUrl}
        />
      </div>

      {/* Original URL */}
      <div className='mb-4'>
        <div className='flex items-center gap-2 mb-2'>
          <TbExternalLink className='h-4 w-4 text-white/60' />
          <span className='text-sm font-medium text-white/60'>Original URL</span>
        </div>
        <p className='text-sm text-white/80 font-mono break-all leading-relaxed'>
          {originalUrl}
        </p>
      </div>

      {/* Description */}
      {description && (
        <div className='mb-4'>
          <p className='text-sm text-white/70 leading-relaxed'>
            {description}
          </p>
        </div>
      )}

      {/* Hover Effect Overlay */}
      <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none' />
    </motion.article>
  )
}

export default ShortLinkCard
