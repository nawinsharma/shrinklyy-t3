'use client'

import Image from 'next/image'

interface Props {
  image: string
  name: string
}

const Profile = ({ image, name }: Props) => {
  return (
    <div className='flex items-center gap-3'>
      <Image
        src={image}
        alt={`user image ${name}`}
        width={40}
        height={40}
        className='rounded-full border-2 border-white/[0.1] shadow-lg'
      />
      <p className='w-28 text-sm font-medium leading-tight text-white/80'>{name}</p>
    </div>
  )
}

export default Profile
