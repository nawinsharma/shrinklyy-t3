'use client'

import { signIn } from 'next-auth/react'

import Button from '@/components/Button'

const SignInWithGoogleButton = () => {
  const handleSignInWithGoogle = async () => {
    await signIn('google', { callbackUrl: '/dashboard' })
  }

  return <Button  className="mt-4 animate-fade-up animate-delay-200" onClick={handleSignInWithGoogle}>Sign in with google</Button>
}

export default SignInWithGoogleButton
