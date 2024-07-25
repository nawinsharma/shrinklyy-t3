import Link from 'next/link'

import Logo from '@/components/Logo'
import SignInWithGitHubButton from '@/components/SignInWithGitHubButton'

import { IoLogoGithub } from 'react-icons/io'

const LandingNavbar = () => {
  return (
    <nav className='fixed left-0 top-0 flex w-full justify-between px-16 pt-6'>
      <Logo />

      <div className='flex items-center gap-2'>
        <SignInWithGitHubButton />

        <Link href='https://github.com/JasonCrk/CutLink' target='_blank'>
          <IoLogoGithub fontSize='2.5rem' />
        </Link>
      </div>
    </nav>
  )
}

export default LandingNavbar
