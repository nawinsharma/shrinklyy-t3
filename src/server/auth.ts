import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from 'next-auth'
import type { Adapter } from 'next-auth/adapters'
import GithubProvider from 'next-auth/providers/github'

import { PrismaAdapter } from '@auth/prisma-adapter'

import { db } from '@/server/db'

import { env } from '@/env'

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string
      name: string
      image: string
    } & DefaultSession['user']
  }

  interface User {
    id: string
    name: string
    image: string
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    GithubProvider({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
  ],
}

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions)
