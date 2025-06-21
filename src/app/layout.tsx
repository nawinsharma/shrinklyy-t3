import '@/styles/globals.css'


import { TRPCReactProvider } from '@/trpc/react'

import { Toaster } from '@/components/ui/toaster'

export const metadata = {
  title: 'Url-shortner',
  description: 'Shortener URL',
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
        <TRPCReactProvider>
            {children}
        </TRPCReactProvider>
        <Toaster />
      </body>
    </html>
  )
}
