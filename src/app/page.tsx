import Link from 'next/link';
import { redirect } from 'next/navigation';

import { getServerAuthSession } from '@/server/auth';

import LandingNavbar from '@/components/LandingNavbar';
import Button from '@/components/Button';

import { MdLink } from 'react-icons/md';

export default async function Home() {
  const session = await getServerAuthSession();

  if (session) redirect('/dashboard');

  return (
    <main className="flex h-screen flex-col items-center justify-between px-4 bg-gradient-to-r from-blue-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950">
      <LandingNavbar />

      <div className="flex flex-col items-center justify-center flex-1">
        <div className="flex items-center gap-3">
          <MdLink fontSize="6.2rem" className="text-blue-500 dark:text-blue-400" />
          <h1 className="text-6xl font-extrabold text-gray-800 dark:text-gray-100">
            Shorten Your Links
          </h1>
        </div>

        <p className="mt-4 w-full max-w-xl text-center text-lg text-gray-600 dark:text-gray-300 animate-fade-up">
          Turn long, complicated URLs into easy-to-share short links in seconds. Make your links memorable and professional.
        </p>

        <Link href="/getting_started">
          <Button className="mt-6 px-8 py-4 text-lg font-semibold bg-blue-500 hover:bg-blue-600 text-white rounded-lg dark:bg-blue-400 dark:hover:bg-blue-500">
            Start Shortening
          </Button>
        </Link>
      </div>

      <footer className="w-full pb-4 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>© 2024 UrlShortner. All rights reserved.</p>
      </footer>
    </main>
  );
}
