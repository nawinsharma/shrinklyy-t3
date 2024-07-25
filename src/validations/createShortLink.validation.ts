import { z } from 'zod'

export const createShortLinkValidation = z.object({
  alias: z
    .string()
    .max(30, 'Maximum 30 characters')
    .nullable()
    .transform(alias => (alias === '' ? null : alias))
    .refine(alias => (!!alias ? alias.indexOf('/') < 0 : true), {
      message: 'The alias cannot contain a "/"',
    })
    .refine(alias => (!!alias ? alias !== 'dashboard' : true), {
      message: 'The alias cannot be equal to "dashboard"',
    })
    .transform(alias => (alias !== null ? alias.replaceAll(' ', '-') : null)),
  originalUrl: z
    .string({ required_error: 'Original URL is required' })
    .url({ message: 'URL is invalid' })
    .max(255, 'Maximum 255 characters'),
  description: z
    .string()
    .nullable()
    .transform(alias => (alias === '' ? null : alias)),
})
