import Link from 'next/link'

const MadeBy = () => {
  return (
    <footer className='absolute bottom-0 left-1/2 mb-2 -translate-x-1/2 text-center'>
      Made by{' '}
      <Link
        href='https://emerzonkolki.dev'
        target='_blank'
        className='font-semibold'
      >
        Emerzon Javier Kolki Martinez
      </Link>
    </footer>
  )
}

export default MadeBy
