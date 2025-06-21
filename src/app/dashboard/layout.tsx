import type { ReactNode } from 'react'

import { redirect } from 'next/navigation'

import { getServerAuthSession } from '@/server/auth'

import DashboardNavbar from '@/app/dashboard/ui/DashboardNavbar'
import AnimatedGradient from '@/components/AnimatedGradient'
import ElegantShape from '@/components/ElegantShape'

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode
}) {
  const session = await getServerAuthSession()

  if (!session) redirect('/getting_started')

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#030303]">
      {/* Animated Background Gradient */}
      <AnimatedGradient
        colors={['#3B82F6', '#8B5CF6', '#06B6D4', '#10B981']}
        speed={0.3}
        blur='heavy'
      />

      {/* Floating Shapes */}
      <div className='absolute inset-0 overflow-hidden'>
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient='from-blue-500/[0.15]'
          className='left-[-10%] top-[15%] md:left-[-5%] md:top-[20%]'
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient='from-purple-500/[0.15]'
          className='right-[-5%] top-[70%] md:right-[0%] md:top-[75%]'
        />
        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient='from-cyan-500/[0.15]'
          className='bottom-[5%] left-[5%] md:bottom-[10%] md:left-[10%]'
        />
        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient='from-emerald-500/[0.15]'
          className='right-[15%] top-[10%] md:right-[20%] md:top-[15%]'
        />
      </div>

      <main className='px-8 sm:px-16 pb-16 relative z-10'>
        <DashboardNavbar {...session.user} />
        {children}
      </main>
      
      {/* Bottom Gradient Overlay */}
      <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80' />
    </div>
  )
}
