import type { ReactNode } from 'react'

import LandingNavbar from '@/components/LandingNavbar'
import { redirect } from 'next/navigation';
import { getServerAuthSession } from '@/server/auth';

export default async function GetStatedLayout({ children }: { children: ReactNode }) {
  const session = await getServerAuthSession();

  if (session) redirect("/dashboard");
  return (
    <main>

      <LandingNavbar />

      {children}
    </main>
  )
}
