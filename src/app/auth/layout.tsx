import type { ReactNode } from 'react'

import LandingNavbar from '@/components/LandingNavbar'

export default function GetStatedLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <LandingNavbar />

      {children}
    </main>
  )
}
