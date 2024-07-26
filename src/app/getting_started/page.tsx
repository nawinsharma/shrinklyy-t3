import Link from 'next/link';
import { redirect } from 'next/navigation';

import { getServerAuthSession } from '@/server/auth';

import SignInWithGitHubButton from '@/components/SignInWithGitHubButton';

export default async function GettingStartedPage() {
  const session = await getServerAuthSession();

  if (session) redirect('/dashboard');

  return (
    <section className="flex h-screen flex-col items-center justify-center gap-6 px-4 bg-gradient-to-r from-blue-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950">
      <h1 className="text-5xl font-extrabold text-gray-800 dark:text-gray-100 text-center animate-fade-up">
        Get Started Now! 🤩
      </h1>

      <h2 className="text-lg text-gray-600 dark:text-gray-300 text-center animate-fade-up animate-delay-100">
        Sign in quickly using{' '}
        <Link
          href="https://github.com/"
          target="_blank"
          className="font-semibold text-blue-500 underline decoration-blue-500 underline-offset-4 transition-colors duration-200 ease-in-out hover:text-blue-700 hover:decoration-blue-700 dark:text-blue-400 dark:hover:text-blue-500 dark:hover:decoration-blue-500"
        >
          GitHub
        </Link>
      </h2>

      <SignInWithGitHubButton />

      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        By signing up, you agree to our{' '}
        <Link
          href="/terms"
          className="underline text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
        >
          Terms of Service
        </Link>{' '}
        and{' '}
        <Link
          href="/privacy"
          className="underline text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
        >
          Privacy Policy
        </Link>.
      </p>
    </section>
  );
}
