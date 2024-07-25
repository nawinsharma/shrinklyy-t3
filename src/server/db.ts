import { PrismaClient } from '@prisma/client'

import { env } from '@/env'

import shortLinkIdEncoder from '@/lib/shortLinkIdEncoder'

const createPrismaClient = () =>
  new PrismaClient({
    log:
      env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  }).$extends({
    result: {
      shortLink: {
        code: {
          needs: { id: true },
          compute({ id }) {
            return shortLinkIdEncoder(id)
          },
        },
      },
    },
  })

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined
}

export const db = globalForPrisma.prisma ?? createPrismaClient()

if (env.NODE_ENV !== 'production') globalForPrisma.prisma = db
