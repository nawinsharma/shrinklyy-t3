import Link from 'next/link'

import Logo from '@/components/Logo'
// import SignInWithGitHubButton from '@/components/SignInWithGitHubButton'

import { IoLogoGithub } from 'react-icons/io'
import { ModeToggle } from './ModeToggle'

const LandingNavbar = () => {
  return (
    <nav className='fixed left-0 top-0 flex w-full justify-between px-16 pt-6'>
      <Logo />

      <div className='flex items-center gap-2'>
        {/* <SignInWithGitHubButton /> */}

        <Link href='https://github.com/nawinkumarsharma/url-shortner' target='_blank'>
          <IoLogoGithub fontSize='2.5rem' />
        </Link>
        <ModeToggle />
      </div>
    </nav>
  )
}

export default LandingNavbar
