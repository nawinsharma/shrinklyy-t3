'use client'

import type { FC } from 'react'

import { api } from '@/trpc/react'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import type { CreateShortLink } from '@/types/createShortLink'

import { createShortLinkValidation } from '@/validations/createShortLink.validation'

import { DialogContent } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

import Input from '@/components/Input'

import { Loader2 } from 'lucide-react'

interface Props {
  onClose: () => void
}

const CreateShortLinkFormModal: FC<Props> = ({ onClose }) => {
  const { mutate: mutateCreateShortLink, isLoading } =
    api.shortLink.create.useMutation()
  const utils = api.useUtils()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateShortLink>({
    resolver: zodResolver(createShortLinkValidation),
  })

  const handleCreateShortLinkSubmit = handleSubmit(data => {
    mutateCreateShortLink(data, {
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSuccess: async () => {
        await utils.shortLink.searchShortLinks.invalidate()
        reset({
          alias: '',
          description: '',
          originalUrl: '',
        })
        onClose()
      },
    })
  })

  return (
    <DialogContent className='max-w-2xl rounded-2xl border border-white/[0.08] bg-black/[0.5] p-8 backdrop-blur-md'>
      <form
        className='flex flex-col gap-6 rounded-md'
        onClick={event => event.stopPropagation()}
        onSubmit={handleCreateShortLinkSubmit}
      >
        <h2 className='text-center text-3xl font-bold'>
          <span className='bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent'>
            Create Short Link
          </span>
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <Input
            fullWidth
            label="Original URL"
            placeholder='https://example.com/my-long-url'
            {...register('originalUrl')}
            error={Boolean(errors.originalUrl)}
            errorMessage={errors.originalUrl?.message}
          />
          <Input
            fullWidth
            label="Alias (Optional)"
            placeholder='my-short-link'
            {...register('alias')}
            error={Boolean(errors.alias)}
            errorMessage={errors.alias?.message}
          />
        </div>

        <Input
          fullWidth
          label="Description (Optional)"
          placeholder='A short description for your link.'
          multiline
          {...register('description')}
          error={Boolean(errors.description)}
          errorMessage={errors.description?.message}
        />

        <Button
          className='group relative mt-4 w-full overflow-hidden rounded-xl border border-white/20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:from-blue-500/30 hover:to-purple-500/30 disabled:opacity-50'
          type='submit'
          disabled={isLoading}
        >
          {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
          Create Link
           <div className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-blue-400 transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-blue-400/20"></div>
        </Button>
      </form>
    </DialogContent>
  )
}

export default CreateShortLinkFormModal
