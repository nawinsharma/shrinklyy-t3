import Link from 'next/link'
import { redirect } from 'next/navigation'

import { getServerAuthSession } from '@/server/auth'

import SignInWithGitHubButton from '@/components/SignInWithGitHubButton'

export default async function GettingStartedPage() {
  const session = await getServerAuthSession()

  if (session) redirect('/dashboard')

  return (
    <section className='flex h-screen flex-col items-center justify-center gap-3 pb-48'>
      <h1 className='text-center text-6xl font-bold leading-9'>
        START NOW 🤩!
      </h1>

      <h2 className='text-xl'>
        Registering with{' '}
        <Link
          href='https://github.com/'
          target='_blank'
          className='font-semibold text-gray-400 underline decoration-gray-400 underline-offset-4 transition-colors ease-out hover:text-gray-900 hover:decoration-gray-900'
        >
          GitHub
        </Link>
      </h2>

      <SignInWithGitHubButton />
    </section>
  )
}
