'use client'
import { motion } from 'framer-motion';
import type { User } from 'next-auth'
import { signOut } from 'next-auth/react'

import { Button } from '@/components/ui/button'

import Profile from '@/app/dashboard/ui/Profile'

import Logo from '@/components/Logo'

import { LogOut } from 'lucide-react'

const DashboardNavbar = ({ image, name }: User) => {
  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' })
  }

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay: 0.2 }}
      className='flex justify-between py-6'
    >
      <Logo />
      <menu className='flex items-center gap-4'>
        <Profile image={image} name={name} />
        <Button
          variant='destructive'
          className='rounded-full bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30 hover:text-red-300 transition-all duration-300'
          size='icon'
          onClick={handleSignOut}
        >
          <LogOut className='h-5 w-5' />
        </Button>
      </menu>
    </motion.nav>
  )
}

export default DashboardNavbar
