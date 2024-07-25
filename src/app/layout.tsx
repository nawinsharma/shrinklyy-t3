import '@/styles/globals.css'


import { TRPCReactProvider } from '@/trpc/react'

import { Toaster } from '@/components/ui/toaster'
import MadeBy from '@/components/MadeBy'

export const metadata = {
  title: 'CutLink',
  description: 'Shortener URL, made by Emerzon Javier Kolki Martinez',
  icons: [{ rel: 'icon', url: '/favicon.png' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`font-sans relative min-h-screen`}>
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <MadeBy />
        <Toaster />
      </body>
    </html>
  )
}
