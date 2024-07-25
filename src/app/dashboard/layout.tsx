import type { ReactNode } from 'react'

import { redirect } from 'next/navigation'

import { getServerAuthSession } from '@/server/auth'

import DashboardNavbar from '@/app/dashboard/ui/DashboardNavbar'

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode
}) {
  const session = await getServerAuthSession()

  if (!session) redirect('/getting_started')

  return (
    <main className='px-16 pb-16'>
      <DashboardNavbar {...session.user} />
      {children}
    </main>
  )
}
