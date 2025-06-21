'use client'

import { signIn } from 'next-auth/react'
import { FaGithub } from 'react-icons/fa'

const SignInWithGitHubButton = () => {
  const handleSignInWithGitHub = async () => {
    await signIn('github', { callbackUrl: '/dashboard' })
  }

  return (
    <button 
      onClick={handleSignInWithGitHub}
      className="inline-flex w-full items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-white/80 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white"
    >
      <FaGithub className="h-5 w-5" />
      <span className='text-sm font-medium tracking-wide'>GitHub</span>
    </button>
  )
}

export default SignInWithGitHubButton
