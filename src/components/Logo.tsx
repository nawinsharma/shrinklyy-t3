import Link from 'next/link'

import { MdLink } from 'react-icons/md'
import { LiaCutSolid } from 'react-icons/lia'

const Logo = () => {
  return (
    <Link
      href='/'
      className='flex w-fit items-center justify-center gap-1 text-2xl'
    >
      <MdLink fontSize='2.2rem' />
      <span className='font-semibold'>CutLink</span>
      <LiaCutSolid fontSize='2.2rem' />
    </Link>
  )
}

export default Logo
