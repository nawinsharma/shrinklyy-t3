import type { ReactNode } from 'react'

import { redirect } from 'next/navigation';
import { getServerAuthSession } from '@/server/auth';

export default async function GetStatedLayout({ children }: { children: ReactNode }) {
  const session = await getServerAuthSession();

  if (session) redirect("/dashboard");
  return (
    <main>
      {children}
    </main>
  )
}
