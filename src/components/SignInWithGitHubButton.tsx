'use client'

import { signIn } from 'next-auth/react'

import Button from '@/components/Button'

const SignInWithGitHubButton = () => {
  const handleSignInWithGitHub = async () => {
    await signIn('github', { callbackUrl: '/dashboard' })
  }

  return <Button onClick={handleSignInWithGitHub}>Sign in</Button>
}

export default SignInWithGitHubButton
