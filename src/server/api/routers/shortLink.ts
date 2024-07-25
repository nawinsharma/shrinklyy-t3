import { z } from 'zod'

import { TRPCError } from '@trpc/server'

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from '@/server/api/trpc'

import { createShortLinkValidation } from '@/validations/createShortLink.validation'
import { updateShortLinkValidation } from '@/validations/updateShortLink.validation'

export const shortLinkRouter = createTRPCRouter({
  searchShortLinks: protectedProcedure
    .input(z.string().max(30, 'The query must has maximum 30 characters'))
    .query(({ ctx, input: searchQuery }) => {
      const isSearchQueryExist = Boolean(searchQuery)

      return ctx.db.shortLink.findMany({
        where: {
          ...(isSearchQueryExist
            ? {
                OR: [
                  {
                    alias: {
                      contains: searchQuery,
                    },
                  },
                  {
                    originalUrl: {
                      contains: searchQuery,
                    },
                  },
                ],
              }
            : undefined),
          AND: {
            userId: ctx.session.user.id,
          },
        },
        select: {
          id: true,
          alias: true,
          code: true,
          createdAt: true,
          originalUrl: true,
          description: true,
        },
      })
    }),

  getShortLinkByAlias: publicProcedure
    .input(
      z
        .string()
        .min(1, 'The query is required')
        .max(30, 'The query must has maximum 30 characters'),
    )
    .query(({ ctx, input: alias }) => {
      return ctx.db.shortLink.findUnique({
        where: {
          alias: alias,
        },
        select: {
          originalUrl: true,
        },
      })
    }),

  getShortLinkById: publicProcedure
    .input(z.bigint().min(10000000000n))
    .query(({ ctx, input: id }) => {
      return ctx.db.shortLink.findUnique({
        where: {
          id,
        },
        select: {
          originalUrl: true,
        },
      })
    }),

  create: protectedProcedure
    .input(createShortLinkValidation)
    .mutation(async ({ input, ctx }) => {
      await ctx.db.shortLink.create({
        data: {
          originalUrl: input.originalUrl,
          description: input.description,
          alias: input.alias,
          userId: ctx.session.user.id,
        },
      })

      return {
        message: 'URL shortened successfully',
      }
    }),

  update: protectedProcedure
    .input(
      z.object({
        id: z.bigint().positive(),
        data: updateShortLinkValidation,
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { data, id } = input

      const shortLink = await ctx.db.shortLink.findUnique({
        where: {
          id,
        },
      })

      if (!shortLink)
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'The short link does not exist',
        })

      if (shortLink.userId !== ctx.session.user.id)
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'The shortened link is not yours',
        })

      await ctx.db.shortLink.update({
        where: {
          id: shortLink.id,
        },
        data,
      })

      return {
        message: 'The link has been updated',
      }
    }),

  delete: protectedProcedure
    .input(z.bigint({ required_error: 'ID is required' }).positive())
    .mutation(async ({ input: shortLinkId, ctx }) => {
      const shortLink = await ctx.db.shortLink.findUnique({
        where: {
          id: shortLinkId,
        },
      })

      if (!shortLink)
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'The short link does not exist',
        })

      if (shortLink.userId !== ctx.session.user.id)
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'The shortened link is not yours',
        })

      await ctx.db.shortLink.delete({
        where: {
          id: shortLink.id,
        },
      })

      return {
        message: 'The link has been deleted',
      }
    }),
})
