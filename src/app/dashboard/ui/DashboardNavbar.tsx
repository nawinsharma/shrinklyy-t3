'use client'

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
    <nav className='flex justify-between pb-4 pt-6'>
      <Logo />
      <menu className='flex items-center gap-2'>
        <Profile image={image} name={name} />
        <Button
          variant='destructive'
          className='bg-red-500 hover:bg-red-600'
          size='icon'
          onClick={handleSignOut}
        >
          <LogOut className='h-5 w-5' />
        </Button>
      </menu>
    </nav>
  )
}

export default DashboardNavbar
