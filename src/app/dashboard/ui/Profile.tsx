'use client'

import Image from 'next/image'

interface Props {
  image: string
  name: string
}

const Profile = ({ image, name }: Props) => {
  return (
    <div className='flex items-center gap-2'>
      <Image
        src={image}
        alt={`user image ${name}`}
        width={40}
        height={40}
        className='rounded-full'
      />
      <p className='w-28 text-sm leading-tight'>{name}</p>
    </div>
  )
}

export default Profile
